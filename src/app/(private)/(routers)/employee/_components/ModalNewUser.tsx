import { useTeamQuery } from "@/app/services/project-team/useQuery";
import { useRolesQuery } from "@/app/services/roles/useQuery";
import { Form, Modal, Input, Select, Button } from "antd";
import React from "react";
import toast from "react-hot-toast";

interface ModalNewUserProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function ModalNewUser({ open, onClose, onSuccess }: ModalNewUserProps) {
  const [form] = Form.useForm();
  const { data: dataRoles } = useRolesQuery.useGetAll({
    page: 1
  })

  const { mutate: handleAddTeam } = useTeamQuery.useCreate(
    (res) => {
      toast.success(res?.message);
      form.resetFields();
      onSuccess();
      onClose();
    },
    (error) => {
      toast.error(
        error?.errors[0].message)
    }
  );

  const onFinish = (values: any) => {
    handleAddTeam(values)
  };

  return (
    <Modal
      title="Tạo người dùng mới"
      open={open}
      onCancel={onClose}
      footer={null}
      centered
    >
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Vui lòng nhập email!" },
            { type: "email", message: "Vui lòng nhập email hợp lệ!" },
          ]}
        >
          <Input placeholder="Nhập email" />
        </Form.Item>

        <Form.Item
          label="Vai trò"
          name="role_id"
          rules={[{ required: true, message: "Vui lòng chọn vai trò!" }]}
        >
          <Select placeholder="Chọn vai trò">
            {dataRoles?.data?.map((role: any) => (
              <Select.Option key={role.id} value={role.id}>
                {role.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item className="flex justify-end gap-5">
          <div className="flex gap-2">
            <Button
              className="btn btn-secondary"
              onClick={onClose}
            >
              Hủy
            </Button>
            <Button type="primary" htmlType="submit" className="btn btn-primary">
              Tạo
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  );
}