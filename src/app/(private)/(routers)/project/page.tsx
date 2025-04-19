"use client";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh, faList, faStar } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
  // State for grid/list view toggle
  const [view, setView] = useState("grid");

  // Sample project data (replace with API or database in production)
  const projects = [
    {
      id: 1,
      title: "Theme development",
      description: "Preparing framework of block-based WordPress Theme.",
      progress: 25,
      priority: "High",
      priorityColor: "#4f6df5",
      priorityBgColor: "#f7f9fc",
      circleBgColor: "#e8eeff",
      team: [
        {
          src: "https://storage.googleapis.com/a1aa/image/d2cad639-f978-4296-860c-b6bf520af27a.jpg",
          alt: "Portrait of a smiling blonde woman with light background",
        },
        {
          src: "https://storage.googleapis.com/a1aa/image/9aa95bf9-5200-41c9-5e64-63ed7737f08b.jpg",
          alt: "Portrait of a smiling Asian woman with light background",
        },
      ],
    },
    {
      id: 2,
      title: "Vuetify Dashboard in Admin",
      description: "Start development server and check Vue project in browser.",
      progress: 30,
      priority: "Medium",
      priorityColor: "#f04a1a",
      priorityBgColor: "#fff6f3",
      circleBgColor: "#f9c6b3",
      team: [
        {
          src: "https://storage.googleapis.com/a1aa/image/e099ef82-496a-458f-add6-5a27031ab537.jpg",
          alt: "Portrait of a smiling man with light background",
        },
        {
          src: "https://storage.googleapis.com/a1aa/image/36b1f6bc-1b42-4ac3-fdcd-49dc115e187f.jpg",
          alt: "Portrait of a smiling woman with light background",
        },
        {
          src: "https://storage.googleapis.com/a1aa/image/d0135581-6ddd-443c-4389-86d3e5e61702.jpg",
          alt: "Portrait of a smiling man with hat and light background",
        },
        {
          src: "https://storage.googleapis.com/a1aa/image/a380d9ec-c9f1-4576-1d8d-cc0e978507f4.jpg",
          alt: "Portrait of a serious man with light background",
        },
      ],
    },
    {
      id: 3,
      title: "Wordpress Dashboard Plugins",
      description: "Customize your WordPress with smart WordPress plugins.",
      progress: 15,
      priority: "Low",
      priorityColor: "#f9c23c",
      priorityBgColor: "#fff9e6",
      circleBgColor: "#fff6d9",
      team: [
        {
          src: "https://storage.googleapis.com/a1aa/image/329292dc-b8d8-48c2-5c48-c757b8b104de.jpg",
          alt: "Portrait of a man with beard and light background",
        },
        {
          src: "https://storage.googleapis.com/a1aa/image/36b1f6bc-1b42-4ac3-fdcd-49dc115e187f.jpg",
          alt: "Portrait of a smiling woman with light background",
        },
        {
          src: "https://storage.googleapis.com/a1aa/image/36b1f6bc-1b42-4ac3-fdcd-49dc115e187f.jpg",
          alt: "Portrait of a smiling woman with light background",
        },
      ],
    },
    {
      id: 4,
      title: "Wordpress Dashboard Plugins",
      description: "Customize your WordPress with smart WordPress plugins.",
      progress: 15,
      priority: "Low",
      priorityColor: "#f9c23c",
      priorityBgColor: "#fff9e6",
      circleBgColor: "#fff6d9",
      team: [
        {
          src: "https://storage.googleapis.com/a1aa/image/329292dc-b8d8-48c2-5c48-c757b8b104de.jpg",
          alt: "Portrait of a man with beard and light background",
        },
        {
          src: "https://storage.googleapis.com/a1aa/image/36b1f6bc-1b42-4ac3-fdcd-49dc115e187f.jpg",
          alt: "Portrait of a smiling woman with light background",
        },
        {
          src: "https://storage.googleapis.com/a1aa/image/36b1f6bc-1b42-4ac3-fdcd-49dc115e187f.jpg",
          alt: "Portrait of a smiling woman with light background",
        },
      ],
    },
    {
      id: 5,
      title: "Wordpress Dashboard Plugins",
      description: "Customize your WordPress with smart WordPress plugins.",
      progress: 15,
      priority: "Low",
      priorityColor: "#f9c23c",
      priorityBgColor: "#fff9e6",
      circleBgColor: "#fff6d9",
      team: [
        {
          src: "https://storage.googleapis.com/a1aa/image/329292dc-b8d8-48c2-5c48-c757b8b104de.jpg",
          alt: "Portrait of a man with beard and light background",
        },
        {
          src: "https://storage.googleapis.com/a1aa/image/36b1f6bc-1b42-4ac3-fdcd-49dc115e187f.jpg",
          alt: "Portrait of a smiling woman with light background",
        },
        {
          src: "https://storage.googleapis.com/a1aa/image/36b1f6bc-1b42-4ac3-fdcd-49dc115e187f.jpg",
          alt: "Portrait of a smiling woman with light background",
        },
      ],
    },
    {
      id: 6,
      title: "Wordpress Dashboard Plugins",
      description: "Customize your WordPress with smart WordPress plugins.",
      progress: 15,
      priority: "Low",
      priorityColor: "#f9c23c",
      priorityBgColor: "#fff9e6",
      circleBgColor: "#fff6d9",
      team: [
        {
          src: "https://storage.googleapis.com/a1aa/image/329292dc-b8d8-48c2-5c48-c757b8b104de.jpg",
          alt: "Portrait of a man with beard and light background",
        },
        {
          src: "https://storage.googleapis.com/a1aa/image/36b1f6bc-1b42-4ac3-fdcd-49dc115e187f.jpg",
          alt: "Portrait of a smiling woman with light background",
        },
        {
          src: "https://storage.googleapis.com/a1aa/image/36b1f6bc-1b42-4ac3-fdcd-49dc115e187f.jpg",
          alt: "Portrait of a smiling woman with light background",
        },
      ],
    },
  ];

  return (
    <div className=" flex flex-col space-y-4 h-full">
      {/* Header */}
      <header className="bg-primary rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.05)] flex flex-col sm:flex-row items-center justify-between px-6 py-4">
        <h1 className="text-[#1a1a4b] text-lg font-normal">Your Projects</h1>
        <div className="flex items-center space-x-3 mt-4 sm:mt-0 bg-white rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.05)] px-3 py-2">
          <select
            aria-label="Status filter"
            className="text-[#1a1a4b] text-sm font-semibold bg-[#f7f9fc] rounded-md px-3 py-1 cursor-pointer focus:outline-none"
            defaultValue="in-progress"
          >
            <option value="" disabled>
              Select Status
            </option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
            <option value="on-hold">On Hold</option>
          </select>
          <button
            aria-label="Grid view"
            onClick={() => setView("grid")}
            className={`rounded-lg p-3 flex items-center justify-center ${view === "grid"
              ? "bg-[#4f6df5] text-white"
              : "bg-[#f7f9fc] text-[#7e7e9f]"
              }`}
          >
            <FontAwesomeIcon icon={faTh} className="text-lg" />
          </button>
          <button
            aria-label="List view"
            onClick={() => setView("list")}
            className={`rounded-lg p-3 flex items-center justify-center ${view === "list"
              ? "bg-[#4f6df5] text-white"
              : "bg-[#f7f9fc] text-[#7e7e9f]"
              }`}
          >
            <FontAwesomeIcon icon={faList} className="text-lg" />
          </button>
          <div className="border-l border-[#d9d9d9] h-6" />
          <button
            className="bg-[#4f6df5] text-white rounded-lg px-5 py-2 text-sm font-medium"
            type="button"
          >
            New Project
          </button>
        </div>
      </header>
      {/* Projects Grid/List */}
      <section
        aria-label="Projects list"
        className={`gap-6 ${view === "grid"
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          : "flex flex-col overflow-y-auto"
          }`}
      >
        {projects.map((project) => (
          <article
            key={project.id}
            className={`bg-white rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.05)] p-6 ${view === "grid"
              ? "flex flex-col justify-between"
              : "flex flex-col md:flex-row md:items-center gap-6"
              }`}
          >
            <div
              className={`flex justify-between items-center mb-4 ${view === "list" ? "md:w-1/4" : ""
                }`}
            >
              <div className="relative w-16 h-16">
                <svg
                  aria-hidden="true"
                  className="absolute top-0 left-0 w-16 h-16"
                  fill="none"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="32"
                    cy="32"
                    r="30"
                    stroke={project.circleBgColor}
                    strokeWidth="4"
                  />
                </svg>
                <svg
                  aria-hidden="true"
                  className="absolute top-0 left-0 w-16 h-16"
                  fill="none"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="32"
                    cy="32"
                    r="30"
                    stroke={project.priorityColor}
                    strokeDasharray="188.4"
                    strokeDashoffset={188.4 - (project.progress / 100) * 188.4}
                    strokeLinecap="round"
                    strokeWidth="4"
                    transform="rotate(-90 32 32)"
                  />
                </svg>
                <span
                  className="absolute inset-0 flex items-center justify-center font-semibold text-lg"
                  style={{ color: project.priorityColor }}
                >
                  {project.progress}%
                </span>
              </div>
              <button
                aria-label="Toggle favorite project"
                className="text-yellow-400 text-xl cursor-pointer focus:outline-none"
              >
                <FontAwesomeIcon icon={faStar} />
              </button>
            </div>
            <div className={view === "list" ? "md:w-1/2" : ""}>
              <h2 className="text-[#1a1a4b] font-semibold text-lg mb-2">
                {project.title}
              </h2>
              <p className="text-[#6b6b8a] text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
            {view === "grid" && <hr className="my-4 border-[#e6e6e6]" />}
            <div
              className={`flex items-center justify-between ${view === "list" ? "md:w-1/4" : ""
                }`}
            >
              <div className="flex -space-x-3">
                {project.team.map((member, index) => (
                  <div key={index} className="relative w-10 h-10">
                    <Image
                      src={member.src}
                      alt={member.alt}
                      fill
                      sizes="40px"
                      className="rounded-full border-2 border-white object-cover"
                      priority={index < 2}
                    />
                  </div>
                ))}
              </div>
              <span
                className="text-sm font-medium px-3 py-1 rounded-md cursor-default"
                style={{
                  color: project.priorityColor,
                  backgroundColor: project.priorityBgColor,
                }}
              >
                {project.priority}
              </span>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}