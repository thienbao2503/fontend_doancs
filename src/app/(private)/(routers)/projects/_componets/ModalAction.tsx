import { Modal, Form, Input, DatePicker, InputNumber, Select } from "antd";
import { useEffect } from "react";
import dayjs from "dayjs";

interface IProps {
    isModalOpen: boolean;
    handleAdd: (values: any) => void;
    handleUpdate: (values: any) => void;
    handleCancel: () => void;
    initialValues?: any; // Nếu cập nhật thì truyền vào, thêm mới thì không cần
}

const { TextArea } = Input;
const { Option } = Select;

function ModalAction({ isModalOpen, handleAdd, handleUpdate, handleCancel, initialValues }: IProps) {
    const [form] = Form.useForm();

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

    const onFinish = (values: any) => {
        // Chuyển đổi ngày về dạng string yyyy-MM-dd
        const data = {
            ...values,
            start_date: values.start_date ? values.start_date.format("YYYY-MM-DD") : undefined,
            end_date: values.end_date ? values.end_date.format("YYYY-MM-DD") : undefined,
        };
        if (initialValues && initialValues.id) {
            handleUpdate(data)
        } else {
            handleAdd(data)
        }
    };

    return (
        <Modal
            title={initialValues ? "Cập nhật dự án" : "Tạo dự án"}
            open={isModalOpen}
            onCancel={() => {
                form.resetFields();
                handleCancel();
            }}
            footer={null}
            destroyOnClose
        >
            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                initialValues={
                    initialValues
                        ? {
                            ...initialValues,
                            start_date: initialValues.start_date ? dayjs(initialValues.start_date) : undefined,
                            end_date: initialValues.end_date ? dayjs(initialValues.end_date) : undefined,
                        }
                        : { currency: "VND" }
                }
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
                        rules={[{ required: true, message: "Vui lòng nhập ngân sách" }]}
                    >
                        <InputNumber
                            className="w-full"
                            min={0}
                            placeholder="Nhập ngân sách"
                        // formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        // parser={value => value ? value.replace(/,*/g, "") : ""}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Đơn vị tiền tệ"
                        name="currency"
                        rules={[{ required: true, message: "Vui lòng chọn đơn vị tiền tệ" }]}
                    >
                        <Select>
                            <Option value="VND">VND</Option>
                            <Option value="USD">USD</Option>
                            <Option value="EUR">EUR</Option>
                        </Select>
                    </Form.Item>
                </div>

                <Form.Item className="flex justify-end mb-0">
                    <button
                        type="button"
                        onClick={() => {
                            form.resetFields();
                            handleCancel();
                        }}
                        className="bg-[#E6E8F0] text-[#5F6F94] text-xs font-semibold rounded-lg px-4 py-2 hover:bg-[#D1D5DB] transition-all duration-200 mr-2"
                    >
                        Hủy
                    </button>
                    <button
                        type="submit"
                        className="bg-primary text-white text-xs font-semibold rounded-lg px-4 py-2  transition-all duration-200"
                    >
                        {initialValues ? "Cập nhật" : "Tạo mới"}
                    </button>
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default ModalAction;