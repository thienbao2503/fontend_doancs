import { useState, useRef, useEffect } from "react";
import ViewModeSelector from "./ViewModeSelector";
// Import ViewModeSelector type from a new interface file
type ViewModeSelector = {
  value: "day" | "week" | "month" | "year";
  onChange: (value: "day" | "week" | "month" | "year") => void;
};

interface Event {
  time: string; // "2:00"
  color: string;
  title: string;
  date: string; // "2025-04-30"
}

interface CalendarGridProps {
  events: Event[];
  selectedDate?: string; // "2025-04-30"
}

export default function CalendarGrid({
  events,
  selectedDate = new Date().toISOString().slice(0, 10),
}: CalendarGridProps) {
  // Tạo danh sách khung giờ từ 0:00 đến 23:00
  const timeSlots = Array.from({ length: 24 }, (_, i) => {
    const hour = i % 12 === 0 ? 12 : i % 12;
    const ampm = i < 12 ? "am" : "pm";
    return `${hour}:00 ${ampm}`;
  });

  // Lấy ngày/tháng/năm từ selectedDate
  const dateObj = new Date(selectedDate);
  const day = dateObj.getDate();
  const weekday = dateObj.toLocaleDateString("en-US", { weekday: "short" });
  const month = dateObj.toLocaleDateString("en-US", { month: "short" });
  const year = dateObj.getFullYear();

  // Hàm tìm event theo khung giờ và ngày
  const getEventByTime = (time: string) => {
    // time: "2:00 am" -> "2:00"
    const [hourStr, ampm] = time.split(" ");
    let hour = parseInt(hourStr, 10);
    if (ampm === "pm" && hour !== 12) hour += 12;
    if (ampm === "am" && hour === 12) hour = 0;
    const timeString = `${hour}:00`;
    return events.find(
      (ev) => ev.time === timeString && ev.date === selectedDate
    );
  };

  const [view, setView] = useState<"day" | "week" | "month" | "year">("day");
  const [showNewModal, setShowNewModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }
    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <div className="bg-white rounded-lg shadow-md border border-[#e2e8f0]">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-[#e2e8f0]">
        <div className="flex items-center space-x-3 text-[#1e293b] font-semibold text-[14px]">
          <span>
            {day} {month}, {year} - {weekday}
          </span>
        </div>

      <div className="flex items-center space-x-3 relative">
        <ViewModeSelector value={view} onChange={setView} />
        <button
          className="bg-[rgb(79,110,247)] text-white text-[13px] font-semibold rounded-md px-3 py-1 hover:bg-[#3b57d1] transition"
          onClick={() => setShowNewModal(true)}
        >
          + New
        </button>
      </div>
      {/* Modal hiển thị form tạo sự kiện mới */}
      
      </div>
      {/* Modal hiển thị form tạo sự kiện mới */}
      {showNewModal && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-white/60 backdrop-blur-[2px]"
    onClick={() => setShowNewModal(false)} // Đóng modal khi nhấn ra ngoài
  >
    <div
      className="bg-white rounded-2xl p-8 w-full max-w-lg shadow-xl relative"
      onClick={(e) => e.stopPropagation()} // Ngăn sự kiện lan truyền khi nhấn vào bên trong modal
    >
      <button
        className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl"
        onClick={() => setShowNewModal(false)}
      >
        &times;
      </button>
      <h2 className="font-bold text-2xl text-center mb-6">New Calendar Event</h2>
      <form
        className="flex flex-col gap-5"
        onSubmit={(e) => {
          e.preventDefault();
          // TODO: Xử lý lưu sự kiện mới tại đây
          setShowNewModal(false);
        }}
      >
        <div>
          <label className="block font-semibold mb-1">Event Title*</label>
          <input
            className="border rounded-lg px-4 py-2 w-full"
            placeholder="Enter event title"
            required
          />
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block font-semibold mb-1">Start Date*</label>
            <input
              className="border rounded-lg px-4 py-2 w-full"
              type="text"
              placeholder="mm/dd/yyyy --:--"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block font-semibold mb-1">End Date*</label>
            <input
              className="border rounded-lg px-4 py-2 w-full"
              type="text"
              placeholder="mm/dd/yyyy --:--"
              required
            />
          </div>
        </div>
        <div>
          <label className="block font-semibold mb-1">Event Color</label>
          <select className="border rounded-lg px-4 py-2 w-full">
            <option value="#4F6FFF">Blue</option>
            <option value="#F15A24">Orange</option>
            <option value="#3AC2B9">Green</option>
            <option value="#F44336">Red</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            className="border rounded-lg px-4 py-2 w-full min-h-[60px]"
            placeholder="Enter description"
          />
        </div>
        <div className="flex justify-center gap-4 mt-2">
          <button
            type="submit"
            className="bg-blue-600 text-white rounded-lg px-6 py-2 font-semibold hover:bg-blue-700 transition"
          >
            Save
          </button>
          <button
            type="button"
            className="bg-red-500 text-white rounded-lg px-6 py-2 font-semibold hover:bg-red-600 transition"
            onClick={() => setShowNewModal(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
)}
      
      {/* Timeline Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-[11px] text-[#475569]">
          <thead>
            <tr className="border-b border-[#e2e8f0]">
              <th className="w-[60px] text-right pr-2 font-semibold text-[30px] text-[#475569] select-none leading-none align-top">
                {day}
                <span className="text-[13px] font-bold ml-1 align-top">{weekday}</span>
              </th>
              <th className="border-l border-[#e2e8f0]"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#e2e8f0]">
              <td className="border-r border-[#e2e8f0] px-2 py-[2px] font-normal text-[11px] text-[#94a3b8] select-none">
                Milestone
              </td>
              <td className="border-l border-[#e2e8f0]"></td>
            </tr>
            <tr className="border-b border-[#e2e8f0]">
              <td className="border-r border-[#e2e8f0] px-2 py-[2px] font-normal text-[11px] text-[#94a3b8] select-none">
                Task
              </td>
              <td className="border-l border-[#e2e8f0]"></td>
            </tr>
            <tr className="border-b border-[#e2e8f0]">
              <td className="border-r border-[#e2e8f0] px-2 py-[2px] font-normal text-[11px] text-[#94a3b8] select-none">
                All Day
              </td>
              <td className="border-l border-[#e2e8f0]"></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Time slots and events */}
      <div className="overflow-y-auto max-h-[600px] scrollbar-thin border-t border-[#e2e8f0]">
        <table className="w-full border-collapse text-[11px] text-[#94a3b8] select-none">
          <tbody>
            {timeSlots.map((slot, idx) => {
              const event = getEventByTime(slot);
              return (
                <tr className="border-b border-[#e2e8f0]" key={slot}>
                  <td className="w-[60px] pr-2 text-right align-top pt-1 font-normal text-[11px] text-[#94a3b8] select-none">
                    {slot}
                  </td>
                  <td className="border-l border-[#e2e8f0] bg-[#f8fafc] h-[40px] relative">
                    {event && (
                      <div
                        className="absolute top-1 left-0 right-0 mx-1 rounded-sm text-white text-[11px] font-semibold px-2 py-[2px] select-text"
                        style={{ background: event.color }}
                      >
                        {event.title}
                        <span className="ml-2 text-xs text-white/70">{event.time}</span>
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}