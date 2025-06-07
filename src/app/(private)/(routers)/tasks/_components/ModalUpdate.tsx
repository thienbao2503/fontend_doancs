import { CalendarIcon } from "@heroicons/react/24/outline";
import { Button, DatePicker, Form, Input, Modal, Select } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";

import { useTaskQuery } from "@/app/services/tasks/useQuery";
import { useRolesQuery } from "@/app/services/roles/useQuery"; // Thêm import
import toast from "react-hot-toast";

export const EditTaskModal = ({
    isOpen,
    onClose,
    task,
    onSave,
    projects,
}: {
    isOpen: boolean;
    onClose: () => void;
    task: any;
    onSave: () => void;
    projects: any[];
}) => {
    const [form] = Form.useForm();
    const [selectedProject, setSelectedProject] = useState<any>(task?.project_id || null);
    const [selectStatus, setSelectStatus] = useState<any>(task?.status || null);

    useEffect(() => {
        if (task) {
            form.setFieldsValue({
                ...task,
                start_time: task?.start_time ? moment(task?.start_time, "YYYY-MM-DD") : null,
                end_time: task?.end_time ? moment(task?.end_time, "YYYY-MM-DD") : null,
            });
        }
    }, [task]);

    const { data: dataRoles } = useRolesQuery.useGetAll({ page: 1 }); // Thêm query roles

    useEffect(() => {
        if (task) {
            setSelectedProject(task?.project_id);
            setSelectStatus(task?.status);
        }
    }, [task?.project_id, task?.status]);

    const { mutate } = useTaskQuery.useUpdate(
        (data) => {
            toast.success(data?.message || "Cập nhật thành công");
            onSave();
            onClose();
        },
        (error) => {
            toast.error(error?.message || "Cập nhật thất bại");
        }
    );

    const handleSave = async () => {
        try {
            const values = await form.validateFields();
            const updateData = {
                id: task?.id,
                project_id: values.project_id,
                name: values.name,
                description: values.description,
                priority: values.priority,
                status: selectStatus,
                start_time: values.start_time ? values.start_time.format("YYYY-MM-DD") : null,
                end_time: values.end_time ? values.end_time.format("YYYY-MM-DD") : null,
                // roleIDs: JSON.stringify(values.roleIDs), // Thay đổi từ userIDs sang roleIDs
            };
            mutate(updateData);
        } catch (error) {
            // Xử lý lỗi nếu cần
        }
    };

    return (
        <Modal
            open={isOpen}
            onCancel={onClose}
            footer={null}
            width={500}
            centered
            className="rounded-2xl"
        >
            <Form
                form={form}
                layout="vertical"
                className="p-6"
                initialValues={{
                    project_id: task?.project_id,
                    name: task?.name,
                    roleIDs: task?.roleIDs ? task?.roleIDs : [], // Thay đổi từ userIDs sang roleIDs
                    description: task?.description,
                    status: task?.status,
                    priority: task?.priority,
                    start_time: task?.start_time ? moment(task?.start_time, "YYYY-MM-DD") : null,
                    end_time: task?.end_time ? moment(task?.end_time, "YYYY-MM-DD") : null,
                }}
            >
                <h2 className="text-[#0B0E3F] text-xl font-bold mb-6">Cập nhật Công Việc</h2>
                <Form.Item
                    label={<span className="text-[#0B0E3F] text-sm font-semibold">Dự án</span>}
                    name="project_id"
                    rules={[{ required: true, message: "Vui lòng chọn dự án" }]}

                >
                    <Select
                        placeholder="Chọn dự án"
                        className="rounded-lg text-sm text-[#5F6F94] bg-[#F9FAFF]"
                        onChange={(value) => setSelectedProject(value)}
                        value={selectedProject}
                        disabled={!projects}
                    >
                        {Array.isArray(projects) && projects.map((project: any) => (
                            <Select.Option key={project.id} value={project.id}>
                                {project.name}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    label={<span className="text-[#0B0E3F] text-sm font-semibold">Tên công việc</span>}
                    name="name"
                    rules={[{ required: true, message: "Vui lòng nhập tên công việc" }]}
                >
                    <Input
                        placeholder="Nhập tên công việc"
                        className="rounded-lg border-[#E6E8F0] text-sm text-[#5F6F94] focus:ring-[#4F63F6] bg-[#F9FAFF] p-3"
                    />
                </Form.Item>
                {/* <Form.Item
                    label={<span className="text-[#0B0E3F] text-sm font-semibold">Nhóm thành viên thực hiện</span>}
                    name="roleIDs"
                    rules={[{ required: true, message: "Vui lòng chọn nhóm thành viên" }]}
                >
                    <Select
                        mode="multiple"
                        placeholder="Chọn nhóm thành viên"
                        className="rounded-lg text-sm text-[#5F6F94] bg-[#F9FAFF]"
                        loading={!dataRoles}
                    >
                        {Array.isArray(dataRoles) && dataRoles.map((role: any) => (
                            <Select.Option key={role.id} value={role.id}>
                                {role.name}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item> */}
                <Form.Item
                    label={<span className="text-[#0B0E3F] text-sm font-semibold">Mô tả</span>}
                    name="description"
                >
                    <Input.TextArea
                        placeholder="Thêm mô tả..."
                        rows={4}
                        className="rounded-lg border-[#E6E8F0] text-sm text-[#5F6F94] focus:ring-[#4F63F6] bg-[#F9FAFF] p-3"
                    />
                </Form.Item>
                <Form.Item
                    label={<span className="text-[#0B0E3F] text-sm font-semibold">Độ ưu tiên</span>}
                    name="priority"
                    rules={[{ required: true, message: "Vui lòng chọn độ ưu tiên" }]}
                >
                    <Select placeholder="Chọn độ ưu tiên">
                        <Select.Option value="low">Thấp</Select.Option>
                        <Select.Option value="medium">Trung bình</Select.Option>
                        <Select.Option value="high">Cao</Select.Option>
                    </Select>
                </Form.Item>
                {/* <Form.Item
                    label={<span className="text-[#0B0E3F] text-sm font-semibold">Trạng thái</span>}
                    name="status"
                    rules={[{ required: true, message: "Vui lòng chọn trạng thái" }]}
                >
                    <Select placeholder="Chọn trạng thái" value={selectStatus} onChange={(value) => setSelectStatus(value)}>
                        <Select.Option value={1}>Đang tiến hành</Select.Option>
                        <Select.Option value={2}>Hoàn thành</Select.Option>
                        <Select.Option value={3}>Đã huỷ</Select.Option>
                    </Select>
                </Form.Item> */}
                <div className="flex space-x-4 gap-2 mb-5">
                    <Form.Item
                        label={<span className="text-[#0B0E3F] text-sm font-semibold">Ngày bắt đầu</span>}
                        name="start_time"
                        rules={[{ required: true, message: "Vui lòng chọn ngày bắt đầu" }]}
                        className="flex-1"
                    >
                        <DatePicker
                            placeholder="dd/mm/yyyy"
                            format="DD/MM/YYYY"
                            className="w-full rounded-lg border-[#E6E8F0] text-sm text-[#5F6F94] focus:ring-[#4F63F6] bg-[#F9FAFF] p-3"
                            suffixIcon={<CalendarIcon className="w-5 h-5 text-gray-400" />}
                        />
                    </Form.Item>
                    <Form.Item
                        label={<span className="text-[#0B0E3F] text-sm font-semibold">Ngày kết thúc</span>}
                        name="end_time"
                        rules={[{ required: true, message: "Vui lòng chọn ngày kết thúc" }]}
                        className="flex-1"
                    >
                        <DatePicker
                            placeholder="dd/mm/yyyy"
                            format="DD/MM/YYYY"
                            className="w-full rounded-lg border-[#E6E8F0] text-sm text-[#5F6F94] focus:ring-[#4F63F6] bg-[#F9FAFF] p-3"
                            suffixIcon={<CalendarIcon className="w-5 h-5 text-gray-400" />}
                        />
                    </Form.Item>
                </div>
                <div className="flex justify-end space-x-3">
                    <Button
                        onClick={onClose}
                        className="bg-[#E6E8F0] text-[#5F6F94] rounded-lg px-5 py-2 h-auto font-semibold"
                    >
                        Hủy
                    </Button>
                    <Button
                        onClick={handleSave}
                        className="bg-gradient-to-r from-[#4F63F6] to-[#647AFA] text-white rounded-lg px-5 py-2 h-auto font-semibold"
                    >
                        Lưu thay đổi
                    </Button>
                </div>
            </Form>
        </Modal>
    );
};