import { Modal, Checkbox, Button } from "antd";
import { useState, useEffect } from "react";

export default function ModalConfig({
    open,
    onClose,
    permissions,
    currentRoleId,
    onSave
}: {
    open: boolean,
    onClose: () => void,
    currentRoleId: { name: string, id: number },
    permissions: any[],
    onSave: (perms: any) => void
}) {
    const [localPerms, setLocalPerms] = useState<any[]>([]);

    useEffect(() => {
        if (permissions && Array.isArray(permissions)) {
            setLocalPerms(permissions);
        } else {
            setLocalPerms([]);
        }
    }, [permissions, open]);

    function mapPermissionTypeToLabel(type: string): string {
        if (type === "CREATE") return "Tạo mới công việc";
        if (type === "UPDATE_INFO") return "Chỉnh sửa thông tin công việc";
        if (type === "UPDATE_PROJECT_INFO") return "Cập nhật thông tin dự án";
        if (type === "UPDATE_PROGRESS") return "Cập nhật tiến độ thực hiện";
        if (type === "CONFIRM_RESULT") return "Xác nhận kết quả thực tế";
        if (type === "ASSIGN") return "Phân công công việc";
        return type;
    }

    const handleCheck = (type: string, checked: boolean) => {
        setLocalPerms(perms => {
            return perms.map(perm =>
                perm.type === type ? { ...perm, isAllowed: checked ? 1 : 0 } : perm
            );
        });
    };

    const handleSave = () => {
        onSave(localPerms);
        onClose();
    };

    return (
        <Modal
            open={open}
            onCancel={onClose}
            footer={null}
            title={`Cấu hình quyền: ${currentRoleId?.name}`}
        >
            <div className="flex flex-col gap-4">
                {localPerms?.map((item) => (
                    <Checkbox
                        key={item.type}
                        checked={item.isAllowed === 1}
                        onChange={e => handleCheck(item.type, e.target.checked)}
                    >
                        {mapPermissionTypeToLabel(item.type)}
                    </Checkbox>
                ))}
            </div>
            <div className="flex justify-end gap-2 mt-6">
                <Button onClick={onClose}>Huỷ</Button>
                <Button type="primary" onClick={handleSave}>Lưu</Button>
            </div>
        </Modal>
    );
}