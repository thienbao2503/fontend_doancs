import { UserGroupIcon } from "@heroicons/react/16/solid";
import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Badge, Popconfirm, Progress, Space, Tooltip, Typography } from "antd";

const { Text, Title } = Typography;

export const TaskItem = ({
    task,
    onView,
    onEdit,
    onDelete,
    onAssignTask,
    updateProgress,
    addImages
}: {
    task: any;
    onView: (task: any) => void;
    onEdit: (task: any) => void;
    onAssignTask: (task: any) => void;
    onDelete: (taskId: string) => void;
    updateProgress: (task: any) => void;
    addImages: (task: any) => void; // Optional prop for adding images
}) => (
    <article className="flex items-start justify-between border gap-5 border-[#E6E8F0] rounded-xl p-6 bg-[#F9FAFF] hover:shadow-md transition-all duration-300">
        <div className="w-1/2">
            <Title level={5} className={`m-0 ${task.completed ? "line-through text-gray-400" : ""}`}>
                {task.name}
            </Title>
            <Text type="secondary" className="text-xs">
                Dự án: {task?.project_name}
            </Text>
        </div>
        <div className="space-y-3 flex-1">
            <div>
                <Text className="text-xs font-medium mb-1 block">Tiến độ thực hiện</Text>
                <Space direction="vertical" className="w-full">
                    <div className="flex items-center gap-3">
                        <Badge color="#4096ff" text={<Text className="text-xs">Thi công</Text>} />
                        <Tooltip title={`Tiến độ nhà thầu: ${task.progress_contractor}%`}>
                            <Progress
                                percent={task.progress_contractor}
                                size="small"
                                strokeColor="#4096ff"
                                trailColor="#e6f4ff"
                                className="flex-1 mb-0"
                            />
                        </Tooltip>
                    </div>
                    <div className="flex items-center gap-3">
                        <Badge color="#52c41a" text={<Text className="text-xs">Giám sát</Text>} />
                        <Tooltip title={`Tiến độ giám sát: ${task.progress_supervisor}%`}>
                            <Progress
                                percent={task.progress_supervisor}
                                size="small"
                                strokeColor="#52c41a"
                                trailColor="#f6ffed"
                                className="flex-1 mb-0"
                            />
                        </Tooltip>
                    </div>
                </Space>
            </div>
        </div>
        <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2">
                <Badge
                    className="site-badge-count-109"
                    count={
                        <span className={`px-3 py-1 text-xs font-medium rounded-full
                            ${task.status == 1 ? "bg-yellow-50 text-yellow-600 border border-yellow-200" : ""}
                            ${task.status == 2 ? "bg-green-50 text-green-600 border border-green-200" : ""}
                            ${task.status == 3 ? "bg-red-50 text-red-600 border border-red-200" : ""}`}
                        >
                            {task.status == 1 && "Đang tiến hành"}
                            {task.status == 2 && "Hoàn thành"}
                            {task.status == 3 && "Đã hủy"}
                        </span>
                    }
                />
                <Badge
                    className="site-badge-count-109"
                    count={
                        <span className={`px-3 py-1 text-xs font-medium rounded-full
                            ${task.priority === "low" ? "bg-blue-50 text-blue-600 border border-blue-200" : ""}
                            ${task.priority === "medium" ? "bg-orange-50 text-orange-600 border border-orange-200" : ""}
                            ${task.priority === "high" ? "bg-red-50 text-red-600 border border-red-200" : ""}`}
                        >
                            Ưu tiên: {task.priority === "low" && "Thấp"}
                            {task.priority === "medium" && "Trung bình"}
                            {task.priority === "high" && "Cao"}
                        </span>
                    }
                />
            </div>


            <div className="flex flex-row gap-2">
                <button onClick={() => updateProgress(task)} className="bg-[#F0FDF4] text-[#16A34A] rounded-lg p-2.5 hover:bg-[#16A34A] hover:text-white transition-all duration-200">
                    Cập nhật tiến độ
                </button>
                <button onClick={() => addImages(task)} className="bg-[#F0FDF4] text-[#16A34A] rounded-lg p-2.5 hover:bg-[#16A34A] hover:text-white transition-all duration-200">
                    Tải ảnh lên
                </button>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
            <Tooltip title="Xem chi tiết">
                <button
                    onClick={() => onView(task)}
                    className="bg-[#EEF2FF] text-[#4F63F6] rounded-lg p-2.5 hover:bg-[#4F63F6] hover:text-white transition-all duration-200"
                >
                    <EyeIcon className="w-5 h-5" />
                </button>
            </Tooltip>

            <Tooltip title="Chỉnh sửa">
                <button
                    onClick={() => onEdit(task)}
                    className="bg-[#FFF7ED] text-[#EA580C] rounded-lg p-2.5 hover:bg-[#EA580C] hover:text-white transition-all duration-200"
                >
                    <PencilIcon className="w-5 h-5" />
                </button>
            </Tooltip>

            <Tooltip title="Phân công">
                <button
                    onClick={() => onAssignTask(task)}
                    className="bg-[#F0FDF4] text-[#16A34A] rounded-lg p-2.5 hover:bg-[#16A34A] hover:text-white transition-all duration-200"
                >
                    <UserGroupIcon className="w-5 h-5" />
                </button>
            </Tooltip>

            {task?.status !== 3 && (
                <Popconfirm
                    title="Xác nhận hủy công việc"
                    description={
                        <div className="text-sm">
                            <p>Bạn có chắc chắn muốn hủy công việc này?</p>
                            <p className="text-gray-500">Hành động này không thể hoàn tác.</p>
                        </div>
                    }
                    onConfirm={() => onDelete(task.id)}
                    okText="Đồng ý"
                    cancelText="Hủy"
                    okButtonProps={{ danger: true }}
                >
                    <Tooltip title="Hủy công việc">
                        <button className="bg-[#FEF2F2] text-[#DC2626] rounded-lg p-2.5 hover:bg-[#DC2626] hover:text-white transition-all duration-200">
                            <TrashIcon className="w-5 h-5" />
                        </button>
                    </Tooltip>
                </Popconfirm>
            )}
        </div>
    </article>
);