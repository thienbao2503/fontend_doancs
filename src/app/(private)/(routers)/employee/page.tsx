"use client";
import { useState } from "react";
import Image from "next/image";
import { 
  Squares2X2Icon, 
  Bars3Icon, 
  EnvelopeIcon, 
  ChatBubbleLeftIcon, 
  PhoneIcon 
} from "@heroicons/react/24/outline";

export default function Employees() {
  const [view, setView] = useState("grid");

  const contacts = [
    {
      id: 1,
      name: "Ruben Franci",
      email: "rubenfranci@gmail.com",
      imageSrc: "https://storage.googleapis.com/a1aa/image/1b25e06e-0903-4ff6-2285-9e94d271373e.jpg",
      imageAlt: "Man with beard and brown shirt, circular profile photo",
    },
    {
      id: 2,
      name: "Kaylynn Press",
      email: "kaylynnpress@gmail.com",
      imageSrc: "https://storage.googleapis.com/a1aa/image/8fb7b40c-7383-4d48-14d7-9bef24157654.jpg",
      imageAlt: "Woman with blonde hair and red shirt, circular profile photo",
    },
    {
      id: 3,
      name: "Corey Press",
      email: "coreypress@gmail.com",
      imageSrc: "https://storage.googleapis.com/a1aa/image/691d3830-9a7f-4311-f0f5-e45f0fdf8699.jpg",
      imageAlt: "Woman with brown hair and bangs, circular profile photo",
    },
  ];

  return (
<div className="bg-gray-50 min-h-screen flex flex-col items-start justify-start max-w-full mx-auto">        
  <header className="w-full max-w-6xl bg-white rounded-lg shadow-lg flex justify-between items-center px-6 py-4 mb-8">
        <h1 className="text-gray-800 font-semibold text-xl">Your Contacts</h1>
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
          >
            New Contact
          </button>
        </div>
      </header>

      <main
  className={`w-full gap-6 ${view === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "flex flex-col space-y-4"}`}>
        {contacts.map((contact) => (
          <section
            key={contact.id}
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
        ))}
      </main>
    </div>
  );
}