import React from "react";
import { Select } from "antd";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface Project {
  id: number | string;
  name: string;
}

interface HeaderSearchProps {
  projects: Project[];
  selectedProjectId: string | number;
  setSelectedProjectId: (id: string | number) => void;
  setIsNewProjectModalOpen: (open: boolean) => void;
  setIsNewTaskModalOpen: (open: boolean) => void;
}

function HeaderSearch({
  projects,
  selectedProjectId,
  setSelectedProjectId,
  setIsNewProjectModalOpen,
  setIsNewTaskModalOpen,
}: HeaderSearchProps) {
  return ( 
    <header className="flex items-center justify-between">
      <h1 className="text-[#0B0E3F] text-xl font-bold tracking-tight">Your Tasks</h1>
      <div className="flex items-center space-x-4">
        <Select
          value={selectedProjectId}
          onChange={(value) => setSelectedProjectId(value)}
          className="w-48 rounded-lg text-sm text-[#5F6F94] bg-[#F3F4F9]"
          suffixIcon={<ChevronDownIcon className="w-4 h-4 text-[#5F6F94]" />}
        >
          {projects.map((project) => (
            <Select.Option key={project.id} value={project.id}>
              {project.name}
            </Select.Option>
          ))}
        </Select>
        <button
          onClick={() => setIsNewProjectModalOpen(true)}
          className="bg-gradient-to-r from-[#B7C7FF] to-[#A3BFFA] text-[#4F63F6] text-sm font-semibold rounded-lg px-5 py-2.5 m-2 hover:from-[#A3BFFA] hover:to-[#B7C7FF] transition-all duration-200 shadow-md"
        >
          New Project
        </button>
        <button
          onClick={() => setIsNewTaskModalOpen(true)}
          className="bg-gradient-to-r from-[#4F63F6] to-[#647AFA] text-white text-sm font-semibold rounded-lg px-5 py-2.5 hover:from-[#647AFA] hover:to-[#4F63F6] transition-all duration-200 shadow-md"
        >
          New Task
        </button>
      </div>
    </header>
  );
}

export default HeaderSearch;