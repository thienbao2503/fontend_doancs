import React from "react";

interface ModalNewUserProps {
  open: boolean;
  onClose: () => void;
}

export default function ModalNewUser({ open, onClose }: ModalNewUserProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30" onClick={onClose}>
      <div
        className="bg-white rounded-2xl p-8 w-full max-w-2xl shadow-2xl border border-gray-200 relative"
        onClick={e => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">New User</h2>
        <form className="grid grid-cols-2 gap-6">
          <div className="col-span-1 flex flex-col gap-4">
            <label className="font-semibold text-gray-700">Upload Profile Picture</label>
            <input type="file" className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
            <label className="font-semibold text-gray-700">Phone Number</label>
            <input type="text" placeholder="Enter phone number" className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition" />
            <label className="font-semibold text-gray-700">Type</label>
            <select className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition">
              <option>Type</option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Intern</option>
            </select>
          </div>
          <div className="col-span-1 flex flex-col gap-4">
            <label className="font-semibold text-gray-700">Full Name</label>
            <input type="text" placeholder="Enter your full name" className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition" />
            <label className="font-semibold text-gray-700">Email</label>
            <input type="email" placeholder="Enter your Email" className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition" />
            <label className="font-semibold text-gray-700">Role</label>
            <select className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition">
              <option>Role</option>
              <option>Manager</option>
              <option>Developer</option>
              <option>Designer</option>
            </select>
          </div>
          <div className="col-span-2 flex justify-center gap-6 mt-8">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold shadow transition"
            >
              Save
            </button>
            <button
              type="button"
              className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-xl font-semibold shadow transition"
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