import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";

interface ModalNewProjectProps {
  open: boolean;
  onClose: () => void;
}

export default function ModalNewProject({ open, onClose }: ModalNewProjectProps) {
  const [show, setShow] = useState(open);

  useEffect(() => {
    if (open) setShow(true);
    else {
      // Đợi transition xong mới ẩn hẳn modal khỏi DOM
      const timeout = setTimeout(() => setShow(false), 200);
      return () => clearTimeout(timeout);
    }
  }, [open]);

  if (!show && !open) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#f6f8fb]/80 transition-opacity duration-200 ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-3xl p-8 w-full max-w-lg shadow-2xl border border-[#e5e7eb] relative transform transition-all duration-200 ${open ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
        onClick={e => e.stopPropagation()}
      >
        <h2 className="text-3xl font-bold text-center text-[#1E1E50] mb-8 tracking-wide">New Project</h2>
        <form className="space-y-6">
          <div>
            <label className="block font-semibold mb-2 text-[#1E1E50]">Project Name*</label>
            <input
              className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-[#f6f8fb] focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition"
              placeholder="Project Name"
            />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block font-semibold mb-2 text-[#1E1E50]">Categories *</label>
              <select className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-[#f6f8fb] focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition">
                <option>Category</option>
                <option>Design</option>
                <option>SEO</option>
                <option>Development</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block font-semibold mb-2 text-[#1E1E50]">Due Dates*</label>
              <div className="relative">
                <input
                  type="date"
                  className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-[#f6f8fb] focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition pr-10"
                  placeholder="dd/mm/yyyy"
                />
                <CalendarDaysIcon className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>
          <div>
            <label className="block font-semibold mb-2 text-[#1E1E50]">Assign Members*</label>
            <input
              className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-[#f6f8fb] focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition"
              placeholder="Assign Members"
            />
          </div>
          <div className="flex justify-center gap-6 mt-8">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold shadow transition"
            >
              Save
            </button>
            <button
              type="button"
              className="bg-white border border-blue-500 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-xl font-semibold shadow transition"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}