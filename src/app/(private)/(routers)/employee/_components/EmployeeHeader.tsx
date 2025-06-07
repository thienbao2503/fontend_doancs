import { Squares2X2Icon, Bars3Icon } from "@heroicons/react/24/outline";
import React from "react";

interface EmployeeHeaderProps {
  view: string;
  setView: (view: string) => void;
  onNewContact: () => void;
}

export default function EmployeeHeader({ view, setView, onNewContact }: EmployeeHeaderProps) {
  return (
    <header className="w-full max-w-full bg-white rounded-lg shadow-lg flex justify-between items-center px-6 py-4 mb-8">
      <h1 className="text-gray-800 font-semibold text-xl">Danh bạ của bạn</h1>
      <div className="flex items-center space-x-4">
        <button
          aria-label="Grid view"
          onClick={() => setView("grid")}
          className={`p-2 rounded-lg flex items-center justify-center ${
            view === "grid" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
          }`}
        >
          <Squares2X2Icon className="w-6 h-6" />
        </button>
        <button
          aria-label="List view"
          onClick={() => setView("list")}
          className={`p-2 rounded-lg flex items-center justify-center ${
            view === "list" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
          }`}
        >
          <Bars3Icon className="w-6 h-6" />
        </button>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
          type="button"
          onClick={onNewContact}
        >
          Liên hệ mới
        </button>
      </div>
    </header>
  );
}