import { useProjectQuery } from "@/app/services/projects/useQuery";
import { Button, Modal, Tag } from "antd";
import moment from "moment";

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
    const { data: dataTeams } = useProjectQuery.useGetTeam({ project_id: task?.project_id });


    return (
        <Modal
            open={isOpen}
            onCancel={onClose}
            footer={null}
            width={600}
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
                        <div className="text-[#0B0E3F] text-sm font-semibold">Người thực hiện</div>
                        <div className="text-[#5F6F94] text-base">
                            {Array.isArray(task.userIDs) && Array.isArray(dataTeams)
                                ? dataTeams
                                    .filter((member: any) => task.userIDs.includes(member.id))
                                    .map((member: any) => member.name || member.email)
                                    .join(", ")
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