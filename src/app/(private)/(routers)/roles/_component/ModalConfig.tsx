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

    const handleCheck = (module: string, type: string, checked: boolean) => {
        setLocalPerms(perms =>
            perms.map(mod =>
                mod.module === module
                    ? {
                        ...mod,
                        permission: mod.permission.map((perm: any) =>
                            perm.type === type
                                ? { ...perm, isAllowed: checked ? 1 : 0 }
                                : perm
                        )
                    }
                    : mod
            )
        );
    };

    const handleSave = () => {
        onSave(localPerms);
        
        onClose();
    };

    return (
        <Modal open={open} onCancel={onClose} footer={null} title={`Cấu hình quyền: ${currentRoleId?.name}`}>
            <div className="flex flex-col gap-4">
                {localPerms?.map((item) => (
                    <div key={item.module} className="mb-4">
                        <div className="font-semibold mb-2">{item.module}</div>
                        <div className="grid grid-cols-2 gap-2">
                            {item.permission?.map((perm: any) => (
                                <Checkbox
                                    key={perm.type}
                                    checked={!!perm.isAllowed}
                                    onChange={e => handleCheck(item.module, perm.type, e.target.checked)}
                                >
                                    {perm.type}
                                </Checkbox>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-end gap-2 mt-6">
                <Button onClick={onClose}>Huỷ</Button>
                <Button type="primary" onClick={handleSave}>Lưu</Button>
            </div>
        </Modal>
    );
}