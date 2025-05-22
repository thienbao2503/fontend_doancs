import { PlusIcon } from "@heroicons/react/24/outline";

interface ProjectHeaderProps {
  onNewProject: () => void; // Thêm prop này
}

export default function ProjectHeader({ onNewProject }: ProjectHeaderProps) {
  return (
    <div className="bg-white rounded-xl px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between shadow mb-6">
      <h1 className="text-lg font-semibold text-[#1E1E50] mb-2 md:mb-0">Quyền</h1>
      <div className="flex items-center space-x-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center space-x-2"
          onClick={onNewProject} // Gọi hàm mở modal khi bấm
        >
          <PlusIcon className="w-5 h-5" />
          <span>Tạo Quyền</span>
        </button>
      </div>
    </div>
  );
}