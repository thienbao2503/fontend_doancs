import { Squares2X2Icon, Bars3Icon, PlusIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

interface ProjectHeaderProps {
  viewMode: "grid" | "list";
  setViewMode: (mode: "grid" | "list") => void;
  onNewProject: () => void; // Thêm prop này
}

export default function ProjectHeader({ viewMode, setViewMode, onNewProject }: ProjectHeaderProps) {
  return (
    <div className="bg-white rounded-xl px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between shadow mb-6">
      <h1 className="text-lg font-semibold text-[#1E1E50] mb-2 md:mb-0">Desk</h1>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">Status :</span>
          <button className="flex items-center space-x-1 bg-gray-100 px-3 py-1.5 rounded-md text-sm font-medium">
            <span>In Progress</span>
            <ChevronDownIcon className="w-4 h-4" />
          </button>
        </div>
        <div className="flex bg-gray-100 rounded-md p-1">
          <button
            className={`p-1.5 rounded-md ${viewMode === "grid" ? "bg-blue-500 text-white" : "text-gray-500"}`}
            onClick={() => setViewMode("grid")}
          >
            <Squares2X2Icon className="w-5 h-5" />
          </button>
          <button
            className={`p-1.5 rounded-md ${viewMode === "list" ? "bg-blue-500 text-white" : "text-gray-500"}`}
            onClick={() => setViewMode("list")}
          >
            <Bars3Icon className="w-5 h-5" />
          </button>
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center space-x-2"
          onClick={onNewProject} // Gọi hàm mở modal khi bấm
        >
          <PlusIcon className="w-5 h-5" />
          <span>New Project</span>
        </button>
      </div>
    </div>
  );
}