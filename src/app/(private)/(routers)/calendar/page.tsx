"use client";
import { useState } from "react";
import CalendarHeader from "./_components/CalendarHeader";
import CalendarGrid from "./_components/CalendarGrid";
import CalendarSidebar from "./_components/CalendarSidebar";
import CalendarNewEventModal from "./_components/CalendarNewEventModal";
import Calendar from "../Calendar";

export default function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    return today.toISOString().slice(0, 10); // "YYYY-MM-DD"
  });

  const [events, setEvents] = useState([
    { time: "2:00", title: "Meeting of design team", color: "#F15A24", date: "2025-04-30" },
    { time: "4:00", title: "Guru Tegh Bahadur Martyrdom Day", color: "#4F6FFF", date: "2025-04-30" },
    { time: "5:00", title: "Interview with Marie", color: "#3AC2B9", date: "2025-04-30" },
  ]);

  const [tasks, setTasks] = useState([
    { title: "Direct Development", description: "Unveiling the design system" },
    { title: "Action point assigned", description: "Unveiling the design system" },
    { title: "Private Notes", description: "Unveiling the design system" },
  ]);

  const [showModal, setShowModal] = useState(false);

  const handleNewEvent = (event: { title: string; date: string; time: string }) => {
    setEvents([
      ...events,
      {
        time: event.time,
        title: event.title,
        color: "#3AC2B9",
        date: event.date,
      },
    ]);
    setShowModal(false);
  };

  return (
    <div className=" bg-gray-50 min-h-screen">
      {/* Header */}
      <CalendarHeader onNew={() => setShowModal(true)} />

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
        {/* Calendar Grid */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-4">
          <CalendarGrid events={events} selectedDate={selectedDate} />
        </div>

        {/* Sidebar */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <Calendar />
          <div className="mt-4">
            <CalendarSidebar tasks={tasks} />
          </div>
        </div>
      </div>

      {/* Modal for New Event */}
      <CalendarNewEventModal
        open={showModal}
        onClose={() => setShowModal(false)}
        onSave={(event) => {
          handleNewEvent({
            title: event.taskName,
            date: new Date().toISOString().slice(0, 10),
            time: "00:00",
          });
        }}
      />
    </div>
  );
}