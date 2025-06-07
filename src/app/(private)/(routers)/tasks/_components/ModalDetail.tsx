import { useProjectQuery } from "@/app/services/projects/useQuery";
import { useRolesQuery } from "@/app/services/roles/useQuery";
import { Button, Modal, Tag, Image } from "antd"; // Add Image import
import moment from "moment";
import { PhotoIcon } from "@heroicons/react/24/outline";

// ViewTaskModal Component
export const ViewTaskModal = ({
    isOpen,
    onClose,
    task,
}: {
    isOpen: boolean;
    onClose: () => void;
    task: any | null;
}) => {
    if (!isOpen || !task) return null;

    // Lấy danh sách roles thay vì teams
    const { data: dataRoles } = useRolesQuery.useGetAll({ page: 1, limit: 10000 });

    // Xử lý màu sắc cho trạng thái và mức độ ưu tiên
    const statusMap = {
        1: { label: "Đang tiến hành", color: "gold" },
        2: { label: "Hoàn thành", color: "green" },
        3: { label: "Đã huỷ", color: "red" },
    };
    const priorityMap = {
        low: { label: "Thấp", color: "gold" },
        medium: { label: "Trung bình", color: "blue" },
        high: { label: "Cao", color: "red" },
    };

    return (
        <Modal
            open={isOpen}
            onCancel={onClose}
            footer={null}
            width={800} // Increased width for better image display
            centered
            className="rounded-2xl"
        >
            <div className="p-8">
                <h2 className="text-[#0B0E3F] text-2xl font-bold mb-2">{task.name}</h2>
                <div className="flex flex-wrap gap-3 mb-6">
                    <Tag color={statusMap[task.status as keyof typeof statusMap]?.color || "default"} className="text-base px-4 py-1 rounded-lg">
                        {statusMap[task.status as keyof typeof statusMap]?.label || "Không xác định"}
                    </Tag>
                    <Tag color={priorityMap[task.priority as keyof typeof priorityMap]?.color || "default"} className="text-base px-4 py-1 rounded-lg">
                        Ưu tiên: {priorityMap[task.priority as keyof typeof priorityMap]?.label || "Không xác định"}
                    </Tag>
                    <Tag color="purple" className="text-base px-4 py-1 rounded-lg">
                        ID: {task.id}
                    </Tag>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                        <div className="text-[#0B0E3F] text-sm font-semibold">Dự án</div>
                        <div className="text-[#5F6F94] text-base">{task.project_name}</div>
                    </div>
                    <div>
                        <div className="text-[#0B0E3F] text-sm font-semibold">Nhóm thành viên tham gia</div>
                        <div className="text-[#5F6F94] text-base">
                            {Array.isArray(task.roleIDs) && Array.isArray(dataRoles?.data)
                                ? dataRoles.data
                                    .filter((role: any) => task.roleIDs.includes(role.id))
                                    .map((role: any) => {
                                        return (
                                            <Tag key={role.id} color="blue" className="text-base px-2 py-1 rounded-lg mr-2 mb-2">
                                                {role.name}
                                            </Tag>
                                        );
                                    })

                                : "--"}
                        </div>
                    </div>
                    <div>
                        <div className="text-[#0B0E3F] text-sm font-semibold">Ngày bắt đầu</div>
                        <div className="text-[#5F6F94] text-base">{task.start_time ? moment(task.start_time).format("DD/MM/YYYY") : "--"}</div>
                    </div>
                    <div>
                        <div className="text-[#0B0E3F] text-sm font-semibold">Ngày kết thúc</div>
                        <div className="text-[#5F6F94] text-base">{task.end_time ? moment(task.end_time).format("DD/MM/YYYY") : "--"}</div>
                    </div>
                    <div>
                        <div className="text-[#0B0E3F] text-sm font-semibold">Ngày tạo</div>
                        <div className="text-[#5F6F94] text-base">{task.created_at ? moment(task.created_at).format("DD/MM/YYYY HH:mm") : "--"}</div>
                    </div>
                    <div>
                        <div className="text-[#0B0E3F] text-sm font-semibold">Ngày cập nhật</div>
                        <div className="text-[#5F6F94] text-base">{task.updated_at ? moment(task.updated_at).format("DD/MM/YYYY HH:mm") : "--"}</div>
                    </div>
                </div>
                <div className="mb-6">
                    <div className="text-[#0B0E3F] text-sm font-semibold mb-1">Mô tả</div>
                    <div className="text-[#5F6F94] text-base bg-[#F9FAFF] p-3 rounded-lg border border-[#E6E8F0] min-h-[48px]">
                        {task.description || "Không có mô tả."}
                    </div>
                </div>

                {/* Add Images Section before the close button */}
                {task?.completed_images && task.completed_images.length > 0 && (
                    <div className="mb-6">
                        <div className="text-[#0B0E3F] text-sm font-semibold mb-3">
                            Hình ảnh công việc ({task.completed_images.length})
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {task.completed_images.map((img: any) => (
                                <div
                                    key={img.image_id}
                                    className="relative group rounded-lg overflow-hidden border border-[#E6E8F0]"
                                >
                                    <Image
                                        src={`http://localhost:2504/uploads/${img.image_url}`}
                                        alt={`Ảnh ${img.image_id}`}
                                        className="w-full h-[120px] object-cover"
                                        preview={{
                                            mask: (
                                                <div className="flex items-center justify-center">
                                                    <PhotoIcon className="w-6 h-6" />
                                                    <span className="ml-2">Xem</span>
                                                </div>
                                            )
                                        }}
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        {moment(img.created_at).format("DD/MM/YYYY HH:mm")}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="flex justify-end">
                    <Button
                        onClick={onClose}
                        className="bg-[#E6E8F0] text-[#5F6F94] rounded-lg px-6 py-2 h-auto font-semibold"
                    >
                        Đóng
                    </Button>
                </div>
            </div>
        </Modal>
    );
};