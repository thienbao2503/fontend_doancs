"use client";
import { useState } from "react";
import ProjectHeader from "./_component/ProjectHeader";
import ModalRole from "./_component/ModalRole";
import ModalConfig from "./_component/ModalConfig";
import { useRolesQuery } from "@/app/services/roles/useQuery";
import { Button, Popconfirm, Table, Tag } from "antd";
import toast from "react-hot-toast";

export default function DeskPage() {
  const [openModal, setOpenModal] = useState(false);
  const [editRole, setEditRole] = useState(null);
  const { data: roles, refetch } = useRolesQuery.useGetAll({ page: 1, limit: 100 });
  const { mutate: deleteRole } = useRolesQuery.useDelete(
    () => {
      toast.success("Xoá quyền thành công");
      refetch();
    },
    (err) => toast.error(err?.message || "Lỗi xoá quyền")
  );
  const [openConfig, setOpenConfig] = useState(false);
  const [configPerms, setConfigPerms] = useState([]);
  const [currentRoleId, setCurrentRoleId] = useState<any>({ name: "", id: "" });

  // Hàm gọi API cập nhật quyền, ví dụ:
  const { mutate: updatePermissions } = useRolesQuery.useUpdateConfig(
    () => {
      toast.success("Cập nhật quyền thành công");
      refetch();
    },
    (err) => toast.error(err?.message || "Lỗi cập nhật quyền")
  );

  return (
    <div className="flex flex-col space-y-4 h-full bg-[#f6f8fb]">
      <ProjectHeader onNewProject={() => { setEditRole(null); setOpenModal(true); }} />
      <Table
        dataSource={roles || []}
        rowKey="id"
        columns={[
          { title: "Tên quyền", dataIndex: "name" },
          {
            title: "Công khai",
            dataIndex: "publish",
            render: (val) => val ? <Tag color="green">Công khai</Tag> : <Tag color="red">Ẩn</Tag>
          },
          {
            title: "Hành động",
            render: (_, record: any) => (
              <div className="flex gap-2">
                <Button onClick={() => { setEditRole(record); setOpenModal(true); }}>Sửa</Button>
                <Button onClick={() => {
                  setCurrentRoleId({ name: record.name, id: record.id });
                  setConfigPerms(record.value || []);
                  setOpenConfig(true);
                }}>Cấu hình</Button>
              </div>
            )
          }
        ]}
        pagination={false}
        className="bg-white rounded-xl shadow"
      />
      <ModalRole
        open={openModal}
        onClose={() => setOpenModal(false)}
        initialValues={editRole}
        onSuccess={refetch}
      />
      <ModalConfig
        open={openConfig}
        onClose={() => setOpenConfig(false)}
        permissions={configPerms}
        currentRoleId={currentRoleId}
        onSave={(perms) => {
          updatePermissions({ id: currentRoleId.id, value: JSON.stringify(perms) });
        }}
      />
    </div>
  );
}
