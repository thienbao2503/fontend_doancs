import { useRef, useEffect, useState } from "react";

interface ViewModeSelectorProps {
  value: "day" | "week" | "month" | "year";
  onChange: (mode: "day" | "week" | "month" | "year") => void;
}

export default function ViewModeSelector({ value, onChange }: ViewModeSelectorProps) {
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
    <div className="relative inline-block">
      <button
        className="bg-[#4f6ef7] text-white text-[13px] font-semibold rounded-md px-3 py-1 flex items-center space-x-1 hover:bg-[#3b57d1] transition"
        onClick={() => setShowDropdown((v) => !v)}
        type="button"
      >
        <span className="capitalize">{value}</span>
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {showDropdown && (
        <div
          ref={dropdownRef}
          className="absolute right-0 top-10 z-10 bg-white border border-gray-200 rounded shadow-md min-w-[100px]"
        >
          {["day", "week", "month", "year"].map((type) => (
            <div
              key={type}
              className={`px-4 py-2 cursor-pointer hover:bg-blue-50 capitalize ${value === type ? "text-blue-600 font-semibold" : ""}`}
              onClick={() => {
                onChange(type as any);
                setShowDropdown(false);
              }}
            >
              {type}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}