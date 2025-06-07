import Image from "next/image";
import { EnvelopeIcon, ChatBubbleLeftIcon, PhoneIcon } from "@heroicons/react/24/outline";
import React from "react";

interface EmployeeCardProps {
  contact: {
    id: number;
    user_email: string,
    username: string,
    role_id: number,
    role_name: string;
  };
  view: string;
}

export default function EmployeeCard({ contact, view }: EmployeeCardProps) {
  return (
    <section
      className={`bg-white rounded-lg p-6 relative flex ${view === "grid" ? "flex-col items-center text-center" : "flex-row items-center justify-between"
        } shadow-md transition-all duration-300 ease-in-out`}
    >
      <div className={`relative ${view === "grid" ? "mb-4" : "mr-4"}`}>
        <div
          className="w-20 h-20 rounded-full border-2 border-blue-600 object-cover text-white flex items-center justify-center text-2xl font-bold bg-blue-500"
        >
          {contact.username.split(" ").slice(-1)[0].slice(0, 1)}
        </div>
      </div>
      <div className={view === "list" ? "flex-1" : ""}>
        <h2 className="text-gray-800 font-semibold text-lg mb-1">{contact.username}</h2>
        <p className="text-gray-500 text-sm mb-4">{contact.user_email}</p>
        <p className="text-gray-500 text-sm mb-4">{contact.role_name}</p>
      </div>
      <div className={`flex items-center justify-center space-x-4 ${view === "grid" ? "mt-4" : ""}`}>
        <button
          aria-label={`Email ${contact.user_email}`}
          className="bg-red-100 text-red-600 p-2 rounded-full transition-colors hover:bg-red-200"
        >
          <EnvelopeIcon className="w-5 h-5" />
        </button>
        <button
          aria-label={`Chat with ${contact.username}`}
          className="bg-blue-100 text-blue-600 p-2 rounded-full transition-colors hover:bg-blue-200"
        >
          <ChatBubbleLeftIcon className="w-5 h-5" />
        </button>
        <button
          aria-label={`Call ${contact.username}`}
          className="bg-green-100 text-green-600 p-2 rounded-full transition-colors hover:bg-green-200"
        >
          <PhoneIcon className="w-5 h-5" />
        </button>
      </div>
      {view === "list" && (
        <button
          className="ml-4 bg-blue-600 text-white px-4 py-1.5 rounded-md text-xs font-medium"
          type="button"
        >
          Nhắn tin
        </button>
      )}
      {view === "grid" && (
        <button
          className="mt-4 bg-blue-600 text-white px-4 py-1.5 rounded-md text-xs font-medium"
          type="button"
        >
          Nhắn tin
        </button>
      )}
    </section>
  );
}