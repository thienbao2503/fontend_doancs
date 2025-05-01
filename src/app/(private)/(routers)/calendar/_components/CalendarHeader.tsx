import React from "react";

export default function CalendarHeader({ onNew }: { onNew: () => void }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-[#ececec] px-6 py-4 flex items-center justify-between mb-6">
      <span className="text-[#1e297b] font-medium text-[18px]">Calender</span>
      <button
        className="bg-[#4f6ef7] hover:bg-[#3b57d1] text-white px-4 py-2 rounded-lg font-medium text-[15px] transition"
        onClick={onNew}
      >
        Create New
      </button>
    </div>
  );
}