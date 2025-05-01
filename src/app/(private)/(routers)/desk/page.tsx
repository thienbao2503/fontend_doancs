"use client";
import { useState, useRef, useEffect } from "react";
import ProjectHeader from "./_component/ProjectHeader";
import ModalNewProject from "./_component/ModalNewProject";
import {
  EllipsisHorizontalIcon,
  DocumentDuplicateIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

const PROJECTS = {
  open: [
    {
      id: 1,
      title: "Hotel Management App UI Kit",
      date: "02 / 02 / 2021",
      progress: 60,
      color: "#FF6B2C",
      bgColor: "#FCE9E3",
      category: "Design",
      team: [
        {
          src: "https://storage.googleapis.com/a1aa/image/bc8f5a6e-8799-4da7-831a-a59024417684.jpg",
          alt: "Profile avatar of a man with beard and short hair",
        },
        {
          src: "https://storage.googleapis.com/a1aa/image/6fef77fb-fb65-4318-dc30-27884697717d.jpg",
          alt: "Profile avatar of a woman with long brown hair",
        },
        {
          src: "https://storage.googleapis.com/a1aa/image/3cb36abe-0a0d-4890-6c60-9499b384f8a1.jpg",
          alt: "Profile avatar of a woman with red hair and bangs",
        },
        {
          src: "https://storage.googleapis.com/a1aa/image/43a6bcc6-dd35-4908-7826-6611f941801e.jpg",
          alt: "Profile avatar of a man with glasses and cap",
        },
      ],
      tagColor: "#FF6B2C",
      tagBg: "#FCE9E3",
    },
    {
      id: 2,
      title: "General Improvement in Landing pages",
      date: "02 / 02 / 2021",
      progress: 40,
      color: "#3A8DF6",
      bgColor: "#E6F0FD",
      category: "Testing",
      team: [
        {
          src: "https://storage.googleapis.com/a1aa/image/6fef77fb-fb65-4318-dc30-27884697717d.jpg",
          alt: "Profile avatar of a woman with long brown hair",
        },
        {
          src: "https://storage.googleapis.com/a1aa/image/3cb36abe-0a0d-4890-6c60-9499b384f8a1.jpg",
          alt: "Profile avatar of a woman with red hair and bangs",
        },
        {
          src: "https://storage.googleapis.com/a1aa/image/43a6bcc6-dd35-4908-7826-6611f941801e.jpg",
          alt: "Profile avatar of a man with glasses and cap",
        },
      ],
      tagColor: "#3A8DF6",
      tagBg: "#E6F0FD",
    },
  ],
  inProgress: [
    {
      id: 3,
      title: "Product list view changes",
      date: "02 / 02 / 2021",
      progress: 80,
      color: "#3AB6A7",
      bgColor: "#D9F1EF",
      category: "SEO",
      team: [
        {
          src: "https://storage.googleapis.com/a1aa/image/c81c94b1-c047-4dfe-5d48-5574f1f00725.jpg",
          alt: "Profile avatar of a woman with brown hair and bangs",
        },
        {
          src: "https://storage.googleapis.com/a1aa/image/afc12cc2-cbea-4a8d-7d70-3ef2cc97bd9b.jpg",
          alt: "Profile avatar of a woman with blonde hair",
        },
        {
          src: "https://storage.googleapis.com/a1aa/image/6da35d3a-4fe5-4cf6-9fd1-9a08b8f647ae.jpg",
          alt: "Profile avatar of a woman with black hair",
        },
        {
          src: "https://storage.googleapis.com/a1aa/image/99e32b36-df86-4206-c64b-0550fc88a3f1.jpg",
          alt: "Profile avatar of a woman with short black hair",
        },
      ],
      tagColor: "#3AB6A7",
      tagBg: "#D9F1EF",
    },
    {
      id: 4,
      title: "Admin Panel Customization",
      date: "02 / 02 / 2021",
      progress: 60,
      color: "#6C63FF",
      bgColor: "#E6E6FF",
      category: "Content",
      team: [
        {
          src: "https://storage.googleapis.com/a1aa/image/afc12cc2-cbea-4a8d-7d70-3ef2cc97bd9b.jpg",
          alt: "Profile avatar of a woman with blonde hair",
        },
        {
          src: "https://storage.googleapis.com/a1aa/image/6da35d3a-4fe5-4cf6-9fd1-9a08b8f647ae.jpg",
          alt: "Profile avatar of a woman with black hair",
        },
        {
          src: "https://storage.googleapis.com/a1aa/image/99e32b36-df86-4206-c64b-0550fc88a3f1.jpg",
          alt: "Profile avatar of a woman with short black hair",
        },
      ],
      tagColor: "#6C63FF",
      tagBg: "#E6E6FF",
    },
  ],
  completed: [
    {
      id: 5,
      title: "Login screen updated in mobile",
      date: "02 / 02 / 2021",
      progress: 100,
      color: "#FF6B2C",
      bgColor: "#FCE9E3",
      category: "Design",
      team: [
        {
          src: "https://storage.googleapis.com/a1aa/image/bc8f5a6e-8799-4da7-831a-a59024417684.jpg",
          alt: "Profile avatar of a man with beard and short hair",
        },
      ],
      tagColor: "#FF6B2C",
      tagBg: "#FCE9E3",
    },
    {
      id: 6,
      title: "Helpdesk in dashboard plans",
      date: "02 / 03 / 2021",
      progress: 100,
      color: "#3AB6A7",
      bgColor: "#D9F1EF",
      category: "Tooling",
      team: [
        {
          src: "https://storage.googleapis.com/a1aa/image/afc12cc2-cbea-4a8d-7d70-3ef2cc97bd9b.jpg",
          alt: "Profile avatar of a woman with blonde hair",
        },
        {
          src: "https://storage.googleapis.com/a1aa/image/6da35d3a-4fe5-4cf6-9fd1-9a08b8f647ae.jpg",
          alt: "Profile avatar of a woman with black hair",
        },
      ],
      tagColor: "#3AB6A7",
      tagBg: "#D9F1EF",
    },
  ],
};

function MenuDropdown({ show, onClose, anchorRef }: { show: boolean; onClose: () => void; anchorRef: React.RefObject<HTMLButtonElement> }) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        anchorRef.current &&
        !anchorRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }
    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [show, onClose, anchorRef]);

  if (!show) return null;
  return (
    <div
      ref={menuRef}
      className="absolute right-2 top-10 z-30 bg-white rounded-xl shadow-lg border border-gray-100 w-44 py-2"
    >
      <button className="flex items-center w-full px-4 py-2 hover:bg-gray-50 text-[#1e293b]">
        <DocumentDuplicateIcon className="w-5 h-5 mr-2" />
        Duplicate
      </button>
      <button className="flex items-center w-full px-4 py-2 hover:bg-gray-50 text-[#1e293b]">
        <PencilSquareIcon className="w-5 h-5 mr-2" />
        Rename
      </button>
      <button className="flex items-center w-full px-4 py-2 hover:bg-gray-50 text-[#1e293b]">
        <TrashIcon className="w-5 h-5 mr-2" />
        Delete
      </button>
    </div>
  );
}

export default function DeskPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [openModal, setOpenModal] = useState(false);
  const [openMenu, setOpenMenu] = useState<null | "open" | "inProgress" | "completed">(null);

  // Thêm state cho filter từng cột
  const [filterOpen, setFilterOpen] = useState("Tất cả");
  const [filterInProgress, setFilterInProgress] = useState("Tất cả");
  const [filterCompleted, setFilterCompleted] = useState("Tất cả");

  const openBtnRef = useRef<HTMLButtonElement>(null);
  const inProgressBtnRef = useRef<HTMLButtonElement>(null);
  const completedBtnRef = useRef<HTMLButtonElement>(null);

  // Lấy tất cả category có trong từng cột
  const getCategories = (list: any[]) => [
    "Tất cả",
    ...Array.from(new Set(list.map((p) => p.category))),
  ];

  // Hàm lọc project theo category
  const filterProjects = (list: any[], filter: string) =>
    filter === "Tất cả" ? list : list.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-[#f6f8fb] p-4">
      <ProjectHeader
        viewMode={viewMode}
        setViewMode={setViewMode}
        onNewProject={() => setOpenModal(true)}
      />
      <ModalNewProject open={openModal} onClose={() => setOpenModal(false)} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {/* Open Projects */}
        <div>
          <div className="flex items-center justify-between bg-white rounded-xl p-4 mb-4 shadow font-semibold text-[#1E1E50] relative">
            <span>Open Projects ({PROJECTS.open.length})</span>
            <div className="flex items-center gap-2">
              <select
                className="border rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                value={filterOpen}
                onChange={(e) => setFilterOpen(e.target.value)}
              >
                {getCategories(PROJECTS.open).map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <button
                ref={openBtnRef}
                onClick={() => setOpenMenu(openMenu === "open" ? null : "open")}
                className="focus:outline-none"
              >
                <EllipsisHorizontalIcon className="w-5 h-5 text-gray-400 cursor-pointer" />
              </button>
            </div>
            <MenuDropdown 
              show={openMenu === "open"} 
              onClose={() => setOpenMenu(null)} 
              anchorRef={openBtnRef as React.RefObject<HTMLButtonElement>} 
            />
          </div>
          {filterProjects(PROJECTS.open, filterOpen).map((proj) => (
            <div key={proj.id} className="bg-white rounded-xl shadow-md p-5 w-full sm:w-[320px] mb-4">
              <h3 className="text-[15px] font-semibold text-[#1B1B4B] mb-2 leading-tight">{proj.title}</h3>
              <div className="flex items-center text-[13px] text-[#6B6B8A] mb-4">
                <span className="mr-2">
                  <i className="far fa-calendar-alt"></i>
                </span>
                {proj.date}
              </div>
              <div className="h-1 w-full rounded-full" style={{ background: proj.bgColor, marginBottom: 16 }}>
                <div className="h-1 rounded-full" style={{ background: proj.color, width: `${proj.progress}%` }}></div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  {proj.team.map((mem: { alt: string; src: string }, idx: number) => (
                    <img
                      key={idx}
                      alt={mem.alt}
                      className="w-7 h-7 rounded-full border-2 border-white"
                      src={mem.src}
                      width={28}
                      height={28}
                    />
                  ))}
                </div>
                <div
                  className="text-[13px] rounded-md px-3 py-1 select-none"
                  style={{ color: proj.tagColor, background: proj.tagBg }}
                >
                  {proj.category}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* In Progress */}
        <div>
          <div className="flex items-center justify-between bg-white rounded-xl p-4 mb-4 shadow font-semibold text-[#1E1E50] relative">
            <span>In Progress ({PROJECTS.inProgress.length})</span>
            <div className="flex items-center gap-2">
              <select
                className="border rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                value={filterInProgress}
                onChange={(e) => setFilterInProgress(e.target.value)}
              >
                {getCategories(PROJECTS.inProgress).map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <button
                ref={inProgressBtnRef}
                onClick={() => setOpenMenu(openMenu === "inProgress" ? null : "inProgress")}
                className="focus:outline-none"
              >
                <EllipsisHorizontalIcon className="w-5 h-5 text-gray-400 cursor-pointer" />
              </button>
            </div>
            <MenuDropdown 
              show={openMenu === "inProgress"} 
              onClose={() => setOpenMenu(null)} 
              anchorRef={inProgressBtnRef as React.RefObject<HTMLButtonElement>} 
            />
          </div>
          {filterProjects(PROJECTS.inProgress, filterInProgress).map((proj) => (
            <div key={proj.id} className="bg-white rounded-xl shadow-md p-5 w-full sm:w-[320px] mb-4">
              <h3 className="text-[15px] font-semibold text-[#1B1B4B] mb-2 leading-tight">{proj.title}</h3>
              <div className="flex items-center text-[13px] text-[#6B6B8A] mb-4">
                <span className="mr-2">
                  <i className="far fa-calendar-alt"></i>
                </span>
                {proj.date}
              </div>
              <div className="h-1 w-full rounded-full" style={{ background: proj.bgColor, marginBottom: 16 }}>
                <div className="h-1 rounded-full" style={{ background: proj.color, width: `${proj.progress}%` }}></div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  {proj.team.map((mem: { alt: string; src: string }, idx: number) => (
                    <img
                      key={idx}
                      alt={mem.alt}
                      className="w-7 h-7 rounded-full border-2 border-white"
                      src={mem.src}
                      width={28}
                      height={28}
                    />
                  ))}
                </div>
                <div
                  className="text-[13px] rounded-md px-3 py-1 select-none"
                  style={{ color: proj.tagColor, background: proj.tagBg }}
                >
                  {proj.category}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Completed */}
        <div>
          <div className="flex items-center justify-between bg-white rounded-xl p-4 mb-4 shadow font-semibold text-[#1E1E50] relative">
            <span>Completed ({PROJECTS.completed.length})</span>
            <div className="flex items-center gap-2">
              <select
                className="border rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                value={filterCompleted}
                onChange={(e) => setFilterCompleted(e.target.value)}
              >
                {getCategories(PROJECTS.completed).map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <button
                ref={completedBtnRef}
                onClick={() => setOpenMenu(openMenu === "completed" ? null : "completed")}
                className="focus:outline-none"
              >
                <EllipsisHorizontalIcon className="w-5 h-5 text-gray-400 cursor-pointer" />
              </button>
            </div>
            <MenuDropdown 
              show={openMenu === "completed"} 
              onClose={() => setOpenMenu(null)} 
              anchorRef={completedBtnRef as React.RefObject<HTMLButtonElement>} 
            />
          </div>
          {filterProjects(PROJECTS.completed, filterCompleted).map((proj) => (
            <div key={proj.id} className="bg-white rounded-xl shadow-md p-5 w-full sm:w-[320px] mb-4">
              <h3 className="text-[15px] font-semibold text-[#1B1B4B] mb-2 leading-tight">{proj.title}</h3>
              <div className="flex items-center text-[13px] text-[#6B6B8A] mb-4">
                <span className="mr-2">
                  <i className="far fa-calendar-alt"></i>
                </span>
                {proj.date}
              </div>
              <div className="h-1 w-full rounded-full" style={{ background: proj.bgColor, marginBottom: 16 }}>
                <div className="h-1 rounded-full" style={{ background: proj.color, width: `${proj.progress}%` }}></div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  {proj.team.map((mem: { alt: string; src: string }, idx: number) => (
                    <img
                      key={idx}
                      alt={mem.alt}
                      className="w-7 h-7 rounded-full border-2 border-white"
                      src={mem.src}
                      width={28}
                      height={28}
                    />
                  ))}
                </div>
                <div
                  className="text-[13px] rounded-md px-3 py-1 select-none"
                  style={{ color: proj.tagColor, background: proj.tagBg }}
                >
                  {proj.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
