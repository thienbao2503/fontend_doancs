import { Button, DatePicker, Form, Input, InputNumber, Modal, Popconfirm, Select } from "antd";
import { Option } from "antd/es/mentions";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import TextArea from "antd/es/input/TextArea";
import { TrashIcon } from "@heroicons/react/24/outline";
interface IProps {
    isModalOpen: boolean;
    handleAddTeam: (values: any) => void;
    handleDeleteTeam: (values: any) => void;
    handleCancel: () => void;
    initialValues?: any; // Nếu cập nhật thì truyền vào, thêm mới thì không cần
}

function ModalView({ isModalOpen, handleAddTeam, handleCancel, initialValues, handleDeleteTeam }: IProps) {
    const [form] = Form.useForm();
    const [email, setEmail] = useState<string>("");

    useEffect(() => {
        if (initialValues) {
            form.setFieldsValue({
                ...initialValues,
                start_date: initialValues.start_date ? dayjs(initialValues.start_date) : undefined,
                end_date: initialValues.end_date ? dayjs(initialValues.end_date) : undefined,
            });
        } else {
            form.resetFields();
        }
    }, [initialValues, form, isModalOpen]);
    return (
        <Modal
            title={"Thông tin dự án"}
            open={isModalOpen}
            onCancel={() => {
                handleCancel();
            }}
            footer={null}
            destroyOnClose
            width={800}
        >
            <div className="grid grid-cols-2 gap-4">
                <div >
                    <Form
                        form={form}
                        layout="vertical"
                        initialValues={
                            initialValues
                                ? {
                                    ...initialValues,
                                    start_date: initialValues.start_date ? dayjs(initialValues.start_date) : undefined,
                                    end_date: initialValues.end_date ? dayjs(initialValues.end_date) : undefined,
                                }
                                : { currency: "VND" }
                        }
                        disabled={true}
                    >
                        <Form.Item
                            label="Tên dự án"
                            name="name"
                            rules={[{ required: true, message: "Vui lòng nhập tên dự án" }]}
                        >
                            <Input placeholder="Nhập tên dự án" />
                        </Form.Item>

                        <Form.Item
                            label="Mô tả"
                            name="description"
                            rules={[{ required: true, message: "Vui lòng nhập mô tả" }]}
                        >
                            <TextArea rows={3} placeholder="Nhập mô tả dự án" />
                        </Form.Item>

                        <div className="grid grid-cols-2 gap-4">
                            <Form.Item
                                label="Ngày bắt đầu"
                                name="start_date"
                                rules={[{ required: true, message: "Vui lòng chọn ngày bắt đầu" }]}
                            >
                                <DatePicker format="YYYY-MM-DD" className="w-full" />
                            </Form.Item>

                            <Form.Item
                                label="Ngày kết thúc"
                                name="end_date"
                                rules={[{ required: true, message: "Vui lòng chọn ngày kết thúc" }]}
                            >
                                <DatePicker format="YYYY-MM-DD" className="w-full" />
                            </Form.Item>
                        </div>

                        <Form.Item
                            label="Mục tiêu"
                            name="goal"
                            rules={[{ required: true, message: "Vui lòng nhập mục tiêu" }]}
                        >
                            <Input placeholder="Nhập mục tiêu dự án" />
                        </Form.Item>

                        <div className="grid grid-cols-2 gap-4">
                            <Form.Item
                                label="Ngân sách"
                                name="budget"
                                rules={[
                                    { required: true, message: "Vui lòng nhập ngân sách" },
                                ]}
                            >
                                <InputNumber
                                    className="w-full"
                                    min={0}
                                    placeholder="Nhập ngân sách"
                                    formatter={(value: any) => value ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") : ""}
                                    parser={value => value ? value.replace(/\./g, "") : ""}
                                />
                            </Form.Item>

                            <Form.Item
                                label="Đơn vị tiền tệ"
                                name="currency"
                                rules={[
                                    { required: true, message: "Vui lòng chọn đơn vị tiền tệ" },
                                    { type: "string", min: 2, max: 3, message: "Mã tiền tệ phải từ 2 đến 3 ký tự" }
                                ]}
                            >
                                <Select>
                                    <Option value="VND">VND</Option>
                                    <Option value="USD">USD</Option>
                                    <Option value="EUR">EUR</Option>
                                </Select>
                            </Form.Item>
                        </div>

                        <Form.Item
                            label="Thời gian dự kiến (ngày)"
                            name="duration"

                            rules={[
                                { required: true, message: "Vui lòng nhập thời gian dự kiến" },
                            ]}
                        >
                            <Input
                                type="number"
                                className="w-full"
                                min={1}
                                placeholder="Nhập số ngày dự kiến"
                            />
                        </Form.Item>

                    </Form>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="gap-2 flex flex-col">
                        <label htmlFor="">Thêm thành viên</label>
                        <div className="flex gap-2">
                            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Nhập email" />
                            <Button onClick={() => handleAddTeam({ id: initialValues?.id, email: email })}>
                                Thêm
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 max-h-[220px] overflow-y-auto scrollbar-hidden">
                        {Array.isArray(initialValues?.teams) && initialValues?.teams?.map((item: any, index: number) => (
                            <div className="flex gap-2 items-center" key={index}>
                                <Input value={item?.email} disabled />
                                <Popconfirm
                                    title="Bạn có chắc chắn muốn xóa thành viên này?"
                                    onConfirm={() => handleDeleteTeam({ id: initialValues?.id, user_id: item?.user_id })}
                                    okText="Xóa"
                                    cancelText="Hủy"
                                >
                                    <Button>
                                        <TrashIcon color="red" className="w-5 h-5" />
                                    </Button>
                                </Popconfirm>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </Modal>
    );
}

export default ModalView;