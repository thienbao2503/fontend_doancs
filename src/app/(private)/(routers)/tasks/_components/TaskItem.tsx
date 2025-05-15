import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Popconfirm } from "antd";



export const TaskItem = ({
    task,
    onView,
    onEdit,
    onDelete,
}: {
    task: any;
    onView: (task: any) => void;
    onEdit: (task: any) => void;
    onDelete: (taskId: string) => void;
}) => (
    <article className="flex items-center justify-between border border-[#E6E8F0] rounded-xl p-5 bg-[#F9FAFF] hover:shadow-md transition-all duration-300">
        <div className="flex items-start space-x-4">
            <div>
                <h2
                    className={`text-[#0B0E3F] text-base font-semibold leading-6 tracking-tight ${task.completed ? "line-through text-gray-400" : ""
                        }`}
                >
                    {task.name}
                </h2>
                <p className="text-[#5F6F94] text-xs mt-1">Dự án: {task?.project_name}</p>
            </div>
        </div>
        <div className="flex items-center space-x-3">
            <span
                className={`text-xs w-[200px] text-center font-semibold rounded-lg px-4 h-full py-3 shadow-sm
                    ${task.status == 1 ? "bg-yellow-100 text-yellow-700" : ""}
                    ${task.status == 2 ? "bg-green-100 text-green-700" : ""}
                    ${task.status == 3 ? "bg-red-100 text-red-700" : ""}
                `}
            >
                {task.status == 1 && "Đang tiến hành"}
                {task.status == 2 && "Hoàn thành"}
                {task.status == 3 && "Đã hủy"}
            </span>
            <span
                className={`text-xs w-[200px] text-center font-semibold rounded-lg px-4 h-full py-3 shadow-sm
                    ${task.priority === "low" ? "bg-yellow-100 text-yellow-700" : ""}
                    ${task.priority === "medium" ? "bg-blue-100 text-blue-700" : ""}
                    ${task.priority === "high" ? "bg-red-100 text-red-700" : ""}
                `}
            > Mức độ ưu tiên:
                {task.priority === "low" && " Thấp"}
                {task.priority === "medium" && " Trung bình"}
                {task.priority === "high" && " Cao"}
            </span>
            <button
                onClick={() => onView(task)}
                className="bg-[#B7C7FF] text-[#4F63F6] rounded-lg p-2.5 hover:opacity-80 transition-opacity duration-200"
                aria-label={`View task ${task.title}`}
            >
                <EyeIcon className="w-5 h-5" />
            </button>
            <button
                onClick={() => onEdit(task)}
                className={` bg-orange-200 text-orange-800 rounded-lg p-2.5 hover:opacity-80 transition-opacity duration-200`}
            >
                <PencilIcon className="w-5 h-5" />
            </button>
            <Popconfirm
                title="Bạn có chắc chắn muốn xoá công việc này?"
                onConfirm={() => onDelete(task.id)}
                okText="Đồng ý"
                cancelText="Huỷ"
            >
                <button
                    className="bg-red-100 text-red-600 rounded-lg p-2.5 hover:opacity-80 transition-opacity duration-200"
                    aria-label={`Delete task ${task.title}`}
                >
                    <TrashIcon className="w-5 h-5" />
                </button>
            </Popconfirm>
        </div>
    </article>
);