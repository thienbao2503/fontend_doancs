import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Select } from "antd";
import React from "react";

interface Project {
  id: number | string;
  name: string;
}

interface HeaderSearchProps {
  projects: Project[];
  selectedProjectId: number;
  setSelectedProjectId: (id: number) => void;
  setIsNewTaskModalOpen: (open: boolean) => void;
}

function HeaderSearch({
  projects,
  selectedProjectId,
  setSelectedProjectId,
  setIsNewTaskModalOpen,
}: HeaderSearchProps) {
  return (
    <header className="flex items-center justify-between">
      <h1 className="text-[#0B0E3F] text-xl font-bold tracking-tight">Nhiệm vụ của bạn</h1>
      <div className="flex items-center space-x-4 gap-2 ">
        <Select
          value={selectedProjectId}
          onChange={(value: number) => setSelectedProjectId(value)}
          className="w-48 rounded-lg !h-full text-sm text-[#5F6F94] bg-[#F3F4F9]"
          suffixIcon={<ChevronDownIcon className="w-4 h-4 text-[#5F6F94]" />}
        >
          <Select.Option value={0}>Tất cả</Select.Option>
          {projects?.map((project) => (
            <Select.Option key={project?.id} value={project?.id}>
              {project?.name}
            </Select.Option>
          ))}
        </Select>

        <button
          onClick={() => setIsNewTaskModalOpen(true)}
          className="bg-gradient-to-r from-[#4F63F6] to-[#647AFA] text-white text-sm font-semibold rounded-lg px-5 py-2.5 hover:from-[#647AFA] hover:to-[#4F63F6] transition-all duration-200 shadow-md"
        >
          Thêm Nhiệm Vụ
        </button>
      </div>
    </header>
  );
}

export default HeaderSearch;