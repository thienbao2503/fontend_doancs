import { Button, DatePicker, Divider, Form, Input, InputNumber, InputRef, Modal, Popconfirm, Select, Space } from "antd";
import { Option } from "antd/es/mentions";
import { useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import TextArea from "antd/es/input/TextArea";
import toast from "react-hot-toast";
import { useProjectQuery } from "@/app/services/projects/useQuery";
interface IProps {
    isModalOpen: boolean;
    onAddTeamSuccess: () => void;
    // handleAddTeam: (values: any) => void;
    handleDeleteTeam: (values: any) => void;
    handleCancel: () => void;
    initialValues?: any; // Nếu cập nhật thì truyền vào, thêm mới thì không cần
}

function ModalView({ isModalOpen, handleCancel, initialValues, handleDeleteTeam, onAddTeamSuccess }: IProps) {
    const { mutate: addTeamProjectMutate } = useProjectQuery.useAddTeam(
        (data) => {
            toast.success(data.message)
            setEmail('');
            setRole_id(0);
            onAddTeamSuccess()
        },
        (error) => {
            toast.error(error?.errors?.[0]?.message || error?.message)
        }
    )

    const [form] = Form.useForm();
    const [email, setEmail] = useState<string>("");
    // const [items, setItems] = useState(['jack', 'lucy']);
    const [name, setName] = useState('');
    const [role_id, setRole_id] = useState(0);
    const inputRef = useRef<InputRef>(null);

    const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };


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

                        <Form.Item
                            label="Ngày bắt đầu"
                            name="start_date"
                            rules={[{ required: true, message: "Vui lòng chọn ngày bắt đầu" }]}
                        >
                            <DatePicker format="YYYY-MM-DD" className="w-full" />
                        </Form.Item>

                        <Form.Item
                            label="Ngày dự kiến hoàn thành"
                            name="end_date"
                            rules={[{ required: true, message: "Vui lòng chọn ngày kết thúc" }]}
                        >
                            <DatePicker format="YYYY-MM-DD" className="w-full" />
                        </Form.Item>

                        <Form.Item
                            label="Mục tiêu"
                            name="goal"
                            rules={[{ required: true, message: "Vui lòng nhập mục tiêu" }]}
                        >
                            <Input placeholder="Nhập mục tiêu dự án" />
                        </Form.Item>

                        {/* <div className="grid grid-cols-2 gap-4">
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
                        </div> */}

                        {/* <Form.Item
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
                        </Form.Item> */}

                    </Form>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4">Nhóm thành viên tham gia</h3>
                    <div className="bg-gray-50 rounded-lg p-4 max-h-[250px] overflow-y-auto">
                        {Array.isArray(initialValues?.roles) && initialValues?.roles?.length > 0 ? (
                            <div className="space-y-3">
                                {initialValues.roles.map((item: any, index: number) => (
                                    <div
                                        key={index}
                                        className="flex items-center p-3 bg-white rounded-lg shadow-sm"
                                    >
                                        <div className="flex-1">
                                            <p className="font-medium text-gray-800">{item.role_name}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-500 text-center py-4">Chưa có nhóm thành viên nào tham gia</p>
                        )}
                    </div>
                </div>
            </div>

        </Modal>
    );
}

export default ModalView;