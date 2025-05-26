import { Modal, Form, Input, Switch, Button } from "antd";
import { useEffect } from "react";
import { useRolesQuery } from "@/app/services/roles/useQuery";
import toast from "react-hot-toast";

export default function ModalRole({ open, onClose, initialValues, onSuccess }: { open: boolean, onClose: () => void, initialValues?: any, onSuccess: () => void }) {
    const [form] = Form.useForm();
    const { mutate: createRole } = useRolesQuery.useCreate(
        () => {
            toast.success("Tạo quyền thành công");
            onSuccess();
            onClose();
        },
        (err) => toast.error(err?.message || "Lỗi tạo quyền")
    );
    const { mutate: updateRole } = useRolesQuery.useUpdate(
        () => {
            toast.success("Cập nhật quyền thành công");
            onSuccess();
            onClose();
        },
        (err) => toast.error(err?.message || "Lỗi cập nhật quyền")
    );

    useEffect(() => {
        if (open) {
            form.setFieldsValue(initialValues || { name: "", publish: true });
        }
    }, [open, initialValues, form]);

    const handleSubmit = async () => {
        const values = await form.validateFields();
        if (initialValues?.id) {
            updateRole({ ...values, id: initialValues.id, publish: values.publish });
        } else {
            createRole({ ...values, publish: values.publish  });
        }
    };

    return (
        <Modal open={open} onCancel={onClose} footer={null} title={initialValues?.id ? "Cập nhật quyền" : "Tạo quyền"}>
            <Form form={form} layout="vertical">
                <Form.Item label="Tên quyền" name="name" rules={[{ required: true, message: "Nhập tên quyền" }]}>
                    <Input placeholder="Nhập tên quyền" />
                </Form.Item>
                <Form.Item label="Công khai" name="publish" valuePropName="checked">
                    <Switch />
                </Form.Item>
                <div className="flex justify-end gap-2 mt-4">
                    <Button onClick={onClose}>Huỷ</Button>
                    <Button type="primary" onClick={handleSubmit}>
                        {initialValues?.id ? "Cập nhật" : "Tạo mới"}
                    </Button>
                </div>
            </Form>
        </Modal>
    );
}