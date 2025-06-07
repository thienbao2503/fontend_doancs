import { Button, Form, Input, Modal, Select } from "antd";
import { useEffect, useState } from "react";

import { useTaskQuery } from "@/app/services/tasks/useQuery";
import toast from "react-hot-toast";

export const ModalProgress = ({
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

    useEffect(() => {
        if (task) {
            form.setFieldsValue({
                ...task,
            });
        }
    }, [task]);
    useEffect(() => {
        if (task) {
            setSelectedProject(task?.project_id);
        }
    }, [task?.project_id, task?.status]);

    // Add mutations for both progress updates
    const { mutate: updateContractorProgress } = useTaskQuery.useUpdateContractorProgress(
        (data) => {
            toast.success("Cập nhật tiến độ nhà thầu thành công");
            onSave();
        },
        (error) => {
            toast.error(error.errors?.[0]?.message || "Cập nhật tiến độ nhà thầu thất bại");
        }
    );

    const { mutate: updateSupervisorProgress } = useTaskQuery.useUpdateSupervisorProgress(
        (data) => {
            toast.success("Cập nhật tiến độ giám sát thành công");
            onSave();
        },
        (error) => {
            toast.error(error.errors?.[0]?.message || "Cập nhật tiến độ giám sát thất bại");
        }
    );

    // Handle progress changes
    const handleContractorProgressChange = (value: number) => {
        updateContractorProgress({
            id: task.id,
            project_id: task?.project_id,
            progress: value,
        });
    };

    const handleSupervisorProgressChange = (value: number) => {
        updateSupervisorProgress({
            id: task.id,
            project_id: task?.project_id,
            progress: value,
        });
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
                    progress_contractor: task?.progress_contractor,
                    progress_supervisor: task?.progress_supervisor,
                }}
            >
                <h2 className="text-[#0B0E3F] text-xl font-bold mb-6">
                    Cập nhật tiến độ công việc
                </h2>
                <div className="grid grid-cols-2 gap-6 ">
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
                            {Array.isArray(projects) &&
                                projects.map((project: any) => (
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
                </div>
                <div className="grid grid-cols-2 gap-6 mt-6">
                    <Form.Item
                        label={<span className="text-[#0B0E3F] text-sm font-semibold">Tiến độ nhà thầu (%)</span>}
                        name="progress_contractor"
                    >
                        <Select
                            placeholder="Chọn tiến độ"
                            className="rounded-lg text-sm text-[#5F6F94] bg-[#F9FAFF]"
                            onChange={handleContractorProgressChange}
                            options={Array.from({ length: 21 }, (_, i) => ({
                                value: i * 5,
                                label: `${i * 5}%`,
                            }))}
                        />
                    </Form.Item>
                    <Form.Item
                        label={<span className="text-[#0B0E3F] text-sm font-semibold">Tiến độ giám sát (%)</span>}
                        name="progress_supervisor"
                    >
                        <Select
                            placeholder="Chọn tiến độ"
                            className="rounded-lg text-sm text-[#5F6F94] bg-[#F9FAFF]"
                            onChange={handleSupervisorProgressChange}
                            options={Array.from({ length: 21 }, (_, i) => ({
                                value: i * 5,
                                label: `${i * 5}%`,
                            }))}
                        />
                    </Form.Item>
                </div>

                <div className="flex justify-end space-x-3">
                    <Button
                        onClick={onClose}
                        className="bg-[#E6E8F0] text-[#5F6F94] rounded-lg px-5 py-2 h-auto font-semibold"
                    >
                        Đóng
                    </Button>
                </div>
            </Form>
        </Modal>
    );
};