"use client";
import { useState } from "react";
import Image from "next/image";

export default function Projects() {
  // State for grid/list view toggle
  const [view, setView] = useState("grid");
  // State for modal visibility (create, view, update)
  const [isModalOpen, setIsModalOpen] = useState(false); // For creating a new project
  const [isViewModalOpen, setIsViewModalOpen] = useState(false); // For viewing project details
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false); // For updating a project
  // State for the currently selected project (for viewing/updating)
  const [selectedProject, setSelectedProject] = useState<{
    id: number;
    title: string;
    description: string;
    start_date: string;
    end_date: string;
    goal: string;
    budget: string;
    duration: string;
    progress: number;
    priority: string;
    priorityColor: string;
    priorityBgColor: string;
    circleBgColor: string;
    team: { src: string; alt: string }[];
  } | null>(null);
  // State for form data (used for both creating and updating)
  const [formData, setFormData] = useState<{
    title: string;
    description: string;
    start_date: string;
    end_date: string;
    goal: string;
    budget: string;
    duration: string;
    progress: number;
    priority: string;
    priorityColor: string;
    priorityBgColor: string;
    circleBgColor: string;
    team: { src: string; alt: string }[];
  }>({
    title: "",
    description: "",
    start_date: "",
    end_date: "",
    goal: "",
    budget: "",
    duration: "",
    progress: 0,
    priority: "Low",
    priorityColor: "#f9c23c",
    priorityBgColor: "#fff9e6",
    circleBgColor: "#fff6d9",
    team: [],
  });

  // Sample project data (replace with API or database in production)
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Theme development",
      description: "Preparing framework of block-based WordPress Theme.",
      start_date: "2025-03-01",
      end_date: "2025-06-01",
      goal: "Develop a block-based WordPress theme",
      budget: "5000",
      duration: "3 months",
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
      start_date: "2025-02-15",
      end_date: "2025-05-15",
      goal: "Create a Vue-based admin dashboard",
      budget: "7000",
      duration: "3 months",
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
      start_date: "2025-04-01",
      end_date: "2025-07-01",
      goal: "Enhance WordPress functionality",
      budget: "3000",
      duration: "3 months",
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
      start_date: "2025-04-01",
      end_date: "2025-07-01",
      goal: "Enhance WordPress functionality",
      budget: "3000",
      duration: "3 months",
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
      start_date: "2025-04-01",
      end_date: "2025-07-01",
      goal: "Enhance WordPress functionality",
      budget: "3000",
      duration: "3 months",
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
      start_date: "2025-04-01",
      end_date: "2025-07-01",
      goal: "Enhance WordPress functionality",
      budget: "3000",
      duration: "3 months",
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
  ]);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission for creating a new project
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newProject = {
      ...formData,
      id: projects.length + 1,
      progress: formData.progress || 0,
      priority: formData.priority || "Low",
      priorityColor: formData.priorityColor || "#f9c23c",
      priorityBgColor: formData.priorityBgColor || "#fff9e6",
      circleBgColor: formData.circleBgColor || "#fff6d9",
      team: formData.team || [],
    };
    setProjects((prev) => [...prev, newProject]);
    resetForm();
    setIsModalOpen(false);
  };

  // Handle form submission for updating a project
  const handleUpdateSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setProjects((prev) =>
      prev.map((project) =>
        selectedProject && project.id === selectedProject.id ? { ...project, ...formData } : project
      )
    );
    resetForm();
    setIsUpdateModalOpen(false);
    setSelectedProject(null);
  };

  // Reset form data
  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      start_date: "",
      end_date: "",
      goal: "",
      budget: "",
      duration: "",
      progress: 0,
      priority: "Low",
      priorityColor: "#f9c23c",
      priorityBgColor: "#fff9e6",
      circleBgColor: "#fff6d9",
      team: [],
    });
  };

  // Open view modal with project details
  const handleViewDetails = (project: typeof projects[number]) => {
    setSelectedProject(project);
    setIsViewModalOpen(true);
  };

  // Open update modal with pre-filled project data
  const handleEditProject = (project: typeof projects[number]) => {
    setSelectedProject(project);
    setFormData(project);
    setIsUpdateModalOpen(true);
  };

  // Delete a project
  const handleDeleteProject = (projectId: number) => {
    setProjects((prev) => prev.filter((project) => project.id !== projectId));
  };

  return (
    <div className="flex flex-col space-y-4 h-full">
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
            className={`rounded-lg p-3 flex items-center justify-center ${
              view === "grid"
                ? "bg-[#4f6df5] text-white"
                : "bg-[#f7f9fc] text-[#7e7e9f]"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 8.25h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
              />
            </svg>
          </button>
          <button
            aria-label="List view"
            onClick={() => setView("list")}
            className={`rounded-lg p-3 flex items-center justify-center ${
              view === "list"
                ? "bg-[#4f6df5] text-white"
                : "bg-[#f7f9fc] text-[#7e7e9f]"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </button>
          <div className="border-l border-[#d9d9d9] h-6" />
          <button
            className="bg-gradient-to-r from-[#4f6df5] to-[#647AFA] text-white rounded-lg px-5 py-2 text-sm font-medium hover:from-[#647AFA] hover:to-[#4f6df5] transition-all duration-200 shadow-md"
            type="button"
            onClick={() => setIsModalOpen(true)}
          >
            + New Project
          </button>
        </div>
      </header>

      {/* Modal for Creating a New Project */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-[#00000080] backdrop-blur-sm flex items-center justify-center z-50 min-h-screen py-4 px-4 sm:px-0">
          <div className="bg-white rounded-2xl p-4 sm:p-6 w-full max-w-md shadow-2xl max-h-[100vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-[#1a1a4b] text-xl font-bold tracking-tight">Create New Project</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-[#5F6F94] hover:text-[#4f6df5] transition-colors duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 flex-1">
              {/* Name */}
              <div>
                <label className="block text-[#1a1a4b] text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-[#e6e6e6] rounded-lg text-sm text-[#5F6F94] focus:outline-none focus:ring-2 focus:ring-[#4f6df5] transition-all duration-200 bg-[#F9FAFF]"
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-[#1a1a4b] text-sm font-semibold mb-2">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-[#e6e6e6] rounded-lg text-sm text-[#5F6F94] focus:outline-none focus:ring-2 focus:ring-[#4f6df5] transition-all duration-200 bg-[#F9FAFF] h-16 sm:h-20 resize-none"
                  required
                />
              </div>

              {/* Start Date and End Date */}
              <div className="flex space-x-4">
                <div className="flex-1">
                  <label className="block text-[#1a1a4b] text-sm font-semibold mb-2">Start Date*</label>
                  <div className="relative">
                    <input
                      type="date"
                      name="start_date"
                      value={formData.start_date}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-[#e6e6e6] rounded-lg text-sm text-[#5F6F94] focus:outline-none focus:ring-2 focus:ring-[#4f6df5] transition-all duration-200 bg-[#F9FAFF]"
                      required
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <label className="block text-[#1a1a4b] text-sm font-semibold mb-2">End Date*</label>
                  <div className="relative">
                    <input
                      type="date"
                      name="end_date"
                      value={formData.end_date}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-[#e6e6e6] rounded-lg text-sm text-[#5F6F94] focus:outline-none focus:ring-2 focus:ring-[#4f6df5] transition-all duration-200 bg-[#F9FAFF]"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Goal */}
              <div>
                <label className="block text-[#1a1a4b] text-sm font-semibold mb-2">Goal (Mục tiêu)*</label>
                <input
                  type="text"
                  name="goal"
                  value={formData.goal}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-[#e6e6e6] rounded-lg text-sm text-[#5F6F94] focus:outline-none focus:ring-2 focus:ring-[#4f6df5] transition-all duration-200 bg-[#F9FAFF]"
                  required
                />
              </div>

              {/* Budget */}
              <div>
                <label className="block text-[#1a1a4b] text-sm font-semibold mb-2">Budget (Ngân sách)*</label>
                <div className="relative">
                  <input
                    type="number"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-[#e6e6e6] rounded-lg text-sm text-[#5F6F94] focus:outline-none focus:ring-2 focus:ring-[#4f6df5] transition-all duration-200 bg-[#F9FAFF]"
                    required
                  />
                </div>
              </div>

              {/* Duration */}
              <div>
                <label className="block text-[#1a1a4b] text-sm font-semibold mb-2">Duration (Thời gian dự kiến)*</label>
                <input
                  type="text"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-[#e6e6e6] rounded-lg text-sm text-[#5F6F94] focus:outline-none focus:ring-2 focus:ring-[#4f6df5] transition-all duration-200 bg-[#F9FAFF]"
                  required
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-end space-x-3 mt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-[#E6E8F0] text-[#5F6F94] text-xs font-semibold rounded-lg px-4 py-2 hover:bg-[#D1D5DB] transition-all duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#4f6df5] to-[#647AFA] text-white text-xs font-semibold rounded-lg px-4 py-2 hover:from-[#647AFA] hover:to-[#4f6df5] transition-all duration-200"
                >
                  Create Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal for Viewing Project Details */}
      {isViewModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-[#00000080] backdrop-blur-sm flex items-center justify-center z-50 min-h-screen py-4 px-4 sm:px-0">
          <div className="bg-white rounded-2xl p-4 sm:p-6 w-full max-w-md shadow-2xl max-h-[100vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-[#1a1a4b] text-xl font-bold tracking-tight">Project Details</h2>
              <button onClick={() => setIsViewModalOpen(false)} className="text-[#5F6F94] hover:text-[#4f6df5] transition-colors duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4 flex-1">
              <div>
                <label className="block text-[#1a1a4b] text-sm font-semibold mb-2">Name</label>
                <p className="text-[#5F6F94] text-sm">{selectedProject.title}</p>
              </div>
              <div>
                <label className="block text-[#1a1a4b] text-sm font-semibold mb-2">Description</label>
                <p className="text-[#5F6F94] text-sm">{selectedProject.description}</p>
              </div>
              <div className="flex space-x-4">
                <div className="flex-1">
                  <label className="block text-[#1a1a4b] text-sm font-semibold mb-2">Start Date</label>
                  <p className="text-[#5F6F94] text-sm">{selectedProject.start_date}</p>
                </div>
                <div className="flex-1">
                  <label className="block text-[#1a1a4b] text-sm font-semibold mb-2">End Date</label>
                  <p className="text-[#5F6F94] text-sm">{selectedProject.end_date}</p>
                </div>
              </div>
              <div>
                <label className="block text-[#1a1a4b] text-sm font-semibold mb-2">Goal</label>
                <p className="text-[#5F6F94] text-sm">{selectedProject.goal}</p>
              </div>
              <div>
                <label className="block text-[#1a1a4b] text-sm font-semibold mb-2">Budget</label>
                <p className="text-[#5F6F94] text-sm">{selectedProject.budget}</p>
              </div>
              <div>
                <label className="block text-[#1a1a4b] text-sm font-semibold mb-2">Duration</label>
                <p className="text-[#5F6F94] text-sm">{selectedProject.duration}</p>
              </div>
              <div>
                <label className="block text-[#1a1a4b] text-sm font-semibold mb-2">Progress</label>
                <p className="text-[#5F6F94] text-sm">{selectedProject.progress}%</p>
              </div>
              <div>
                <label className="block text-[#1a1a4b] text-sm font-semibold mb-2">Priority</label>
                <p className="text-[#5F6F94] text-sm">{selectedProject.priority}</p>
              </div>
              <div>
                <label className="block text-[#1a1a4b] text-sm font-semibold mb-2">Team</label>
                <div className="flex -space-x-3">
                  {selectedProject.team.map((member, index) => (
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
              </div>
            </div>

            {/* Close Button */}
            <div className="flex justify-end mt-4">
              <button
                type="button"
                onClick={() => setIsViewModalOpen(false)}
                className="bg-[#E6E8F0] text-[#5F6F94] text-xs font-semibold rounded-lg px-4 py-2 hover:bg-[#D1D5DB] transition-all duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Updating a Project */}
      {isUpdateModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-[#00000080] backdrop-blur-sm flex items-center justify-center z-50 min-h-screen py-4 px-4 sm:px-0">
          <div className="bg-white rounded-2xl p-4 sm:p-6 w-full max-w-md shadow-2xl max-h-[100vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-[#1a1a4b] text-xl font-bold tracking-tight">Update Project</h2>
              <button onClick={() => setIsUpdateModalOpen(false)} className="text-[#5F6F94] hover:text-[#4f6df5] transition-colors duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleUpdateSubmit} className="space-y-4 flex-1">
              {/* Name */}
              <div>
                <label className="block text-[#1a1a4b] text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-[#e6e6e6] rounded-lg text-sm text-[#5F6F94] focus:outline-none focus:ring-2 focus:ring-[#4f6df5] transition-all duration-200 bg-[#F9FAFF]"
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-[#1a1a4b] text-sm font-semibold mb-2">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-[#e6e6e6] rounded-lg text-sm text-[#5F6F94] focus:outline-none focus:ring-2 focus:ring-[#4f6df5] transition-all duration-200 bg-[#F9FAFF] h-16 sm:h-20 resize-none"
                  required
                />
              </div>

              {/* Start Date and End Date */}
              <div className="flex space-x-4">
                <div className="flex-1">
                  <label className="block text-[#1a1a4b] text-sm font-semibold mb-2">Start Date*</label>
                  <div className="relative">
                    <input
                      type="date"
                      name="start_date"
                      value={formData.start_date}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-[#e6e6e6] rounded-lg text-sm text-[#5F6F94] focus:outline-none focus:ring-2 focus:ring-[#4f6df5] transition-all duration-200 bg-[#F9FAFF]"
                      required
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <label className="block text-[#1a1a4b] text-sm font-semibold mb-2">End Date*</label>
                  <div className="relative">
                    <input
                      type="date"
                      name="end_date"
                      value={formData.end_date}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-[#e6e6e6] rounded-lg text-sm text-[#5F6F94] focus:outline-none focus:ring-2 focus:ring-[#4f6df5] transition-all duration-200 bg-[#F9FAFF]"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Goal */}
              <div>
                <label className="block text-[#1a1a4b] text-sm font-semibold mb-2">Goal (Mục tiêu)*</label>
                <input
                  type="text"
                  name="goal"
                  value={formData.goal}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-[#e6e6e6] rounded-lg text-sm text-[#5F6F94] focus:outline-none focus:ring-2 focus:ring-[#4f6df5] transition-all duration-200 bg-[#F9FAFF]"
                  required
                />
              </div>

              {/* Budget */}
              <div>
                <label className="block text-[#1a1a4b] text-sm font-semibold mb-2">Budget (Ngân sách)*</label>
                <div className="relative">
                  <input
                    type="number"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-[#e6e6e6] rounded-lg text-sm text-[#5F6F94] focus:outline-none focus:ring-2 focus:ring-[#4f6df5] transition-all duration-200 bg-[#F9FAFF]"
                    required
                  />
                </div>
              </div>

              {/* Duration */}
              <div>
                <label className="block text-[#1a1a4b] text-sm font-semibold mb-2">Duration (Thời gian dự kiến)*</label>
                <input
                  type="text"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-[#e6e6e6] rounded-lg text-sm text-[#5F6F94] focus:outline-none focus:ring-2 focus:ring-[#4f6df5] transition-all duration-200 bg-[#F9FAFF]"
                  required
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-end space-x-3 mt-4">
                <button
                  type="button"
                  onClick={() => setIsUpdateModalOpen(false)}
                  className="bg-[#E6E8F0] text-[#5F6F94] text-xs font-semibold rounded-lg px-4 py-2 hover:bg-[#D1D5DB] transition-all duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#4f6df5] to-[#647AFA] text-white text-xs font-semibold rounded-lg px-4 py-2 hover:from-[#647AFA] hover:to-[#4f6df5] transition-all duration-200"
                >
                  Update Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Projects Grid/List */}
      <section
        aria-label="Projects list"
        className={`gap-6 ${
          view === "grid"
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            : "flex flex-col overflow-y-auto"
        }`}
      >
        {projects.map((project) => (
          <article
            key={project.id}
            className={`bg-white rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.05)] p-6 ${
              view === "grid"
                ? "flex flex-col justify-between"
                : "flex flex-col md:flex-row md:items-center gap-6"
            }`}
          >
            <div
              className={`flex justify-between items-center mb-4 ${
                view === "list" ? "md:w-1/4" : ""
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
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
              className={`flex items-center justify-between ${
                view === "list" ? "md:w-1/4" : ""
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

            {/* Action Buttons */}
            <div className="flex justify-end space-x-2 mt-4">
              <button
                onClick={() => handleViewDetails(project)}
                className="bg-[#4f6df5] text-white text-xs font-semibold rounded-lg px-3 py-1 hover:bg-[#647AFA] transition-all duration-200"
              >
                View
              </button>
              <button
                onClick={() => handleEditProject(project)}
                className="bg-[#f9c23c] text-white text-xs font-semibold rounded-lg px-3 py-1 hover:bg-[#e6b029] transition-all duration-200"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteProject(project.id)}
                className="bg-[#f04a1a] text-white text-xs font-semibold rounded-lg px-3 py-1 hover:bg-[#d43f17] transition-all duration-200"
              >
                Delete
              </button>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}