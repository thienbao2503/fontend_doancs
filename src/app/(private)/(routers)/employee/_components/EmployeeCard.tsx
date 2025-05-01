import Image from "next/image";
import { EnvelopeIcon, ChatBubbleLeftIcon, PhoneIcon } from "@heroicons/react/24/outline";
import React from "react";

interface EmployeeCardProps {
  contact: {
    id: number;
    name: string;
    email: string;
    imageSrc: string;
    imageAlt: string;
  };
  view: string;
}

export default function EmployeeCard({ contact, view }: EmployeeCardProps) {
  return (
    <section
      className={`bg-white rounded-lg p-6 relative flex ${
        view === "grid" ? "flex-col items-center text-center" : "flex-row items-center justify-between"
      } shadow-md transition-all duration-300 ease-in-out`}
    >
      <div className={`relative ${view === "grid" ? "mb-4" : "mr-4"}`}>
        <Image
          src={contact.imageSrc}
          alt={contact.imageAlt}
          width={80}
          height={80}
          className="w-20 h-20 rounded-full border-2 border-blue-600 object-cover"
        />
      </div>
      <div className={view === "list" ? "flex-1" : ""}>
        <h2 className="text-gray-800 font-semibold text-lg mb-1">{contact.name}</h2>
        <p className="text-gray-500 text-sm mb-4">{contact.email}</p>
      </div>
      <div className={`flex items-center justify-center space-x-4 ${view === "grid" ? "mt-4" : ""}`}>
        <button
          aria-label={`Email ${contact.name}`}
          className="bg-red-100 text-red-600 p-2 rounded-full transition-colors hover:bg-red-200"
        >
          <EnvelopeIcon className="w-5 h-5" />
        </button>
        <button
          aria-label={`Chat with ${contact.name}`}
          className="bg-blue-100 text-blue-600 p-2 rounded-full transition-colors hover:bg-blue-200"
        >
          <ChatBubbleLeftIcon className="w-5 h-5" />
        </button>
        <button
          aria-label={`Call ${contact.name}`}
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
          Message
        </button>
      )}
      {view === "grid" && (
        <button
          className="mt-4 bg-blue-600 text-white px-4 py-1.5 rounded-md text-xs font-medium"
          type="button"
        >
          Message
        </button>
      )}
    </section>
  );
}