import { CalendarIcon } from "@heroicons/react/24/outline";
import { Button, DatePicker, Form, Input, Modal, Select } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";

import { useTaskQuery } from "@/app/services/tasks/useQuery";
import { useRolesQuery } from "@/app/services/roles/useQuery"; // Thêm import
import toast from "react-hot-toast";

export const ModalAssign = ({
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

    useEffect(() => {
        if (task) {
            form.setFieldsValue({
                ...task,
            });
        }
    }, [task]);
    const [selectedProject, setSelectedProject] = useState<any>(task?.project_id || null);

    const { data: dataRoles } = useRolesQuery.useGetAll({ page: 1, limit: 10000 }); // Thêm query roles

    useEffect(() => {
        if (task) {
            setSelectedProject(task?.project_id);
        }
    }, [task?.project_id, task?.status]);

    const { mutate } = useTaskQuery.useAssign(
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
                roleIDs: JSON.stringify(values.roleIDs), // Thay đổi từ userIDs sang roleIDs
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
                }}
            >
                <h2 className="text-[#0B0E3F] text-xl font-bold mb-6">
                    Giao công việc cho nhóm thành viên
                </h2>
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
                        disabled={true}
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
                        disabled={true}
                        placeholder="Nhập tên công việc"
                        className="rounded-lg border-[#E6E8F0] text-sm text-[#5F6F94] focus:ring-[#4F63F6] bg-[#F9FAFF] p-3"
                    />
                </Form.Item>
                <Form.Item
                    label={<span className="text-[#0B0E3F] text-sm font-semibold">Nhóm thành viên thực hiện</span>}
                    name="roleIDs"
                    rules={[{ required: false }]}
                >
                    <Select
                        mode="multiple"
                        placeholder="Chọn nhóm thành viên"
                        className="rounded-lg text-sm text-[#5F6F94] bg-[#F9FAFF]"
                        loading={!dataRoles?.data}
                    >
                        {Array.isArray(dataRoles?.data) && dataRoles.data.map((role: any) => (
                            <Select.Option key={role.id} value={role.id}>
                                {role.name}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>

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