import { Button, Form, Modal, Upload, message } from "antd";
import { PhotoIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useTaskQuery } from "@/app/services/tasks/useQuery";
import toast from "react-hot-toast";
import type { RcFile, UploadProps } from 'antd/es/upload';
import type { UploadFile } from 'antd/es/upload/interface';

interface CompletedImage {
    image_id: number;
    image_url: string;
    created_at: string;
}

const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = error => reject(error);
    });

export const ModalUpload = ({
    isOpen,
    onClose,
    task,
    onSave,
}: {
    isOpen: boolean;
    onClose: () => void;
    task: any;
    onSave: () => void;
}) => {
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');

    // Initialize fileList with existing images when component mounts
    useEffect(() => {
        if (task?.completed_images) {
            const existingImages = task.completed_images.map((img: CompletedImage) => ({
                uid: `existing-${img.image_id}`,
                name: img.image_url.split('/').pop() || '',
                status: 'done',
                url: `http://localhost:2504/uploads/${img.image_url}`, // You might need to prepend your API base URL
                image_id: img.image_id
            }));
            setFileList(existingImages);
        }
    }, [task]);

    const { mutate: uploadImages } = useTaskQuery.useUploadImages(
        (data) => {
            toast.success("Tải ảnh lên thành công");
            onSave();
            onClose();
        },
        (error) => {
            toast.error(error.errors?.[0]?.message || "Tải ảnh lên thất bại");
        }
    );

    const { mutate: deleteImage } = useTaskQuery.useDeleteImage(
        () => {
            toast.success("Xóa ảnh thành công");
            onSave();
        },
        (error) => {
            toast.error(error.errors?.[0]?.message || "Xóa ảnh thất bại");
        }
    );

    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as RcFile);
        }
        setPreviewImage(file.url || (file.preview as string));
        setPreviewOpen(true);
        setPreviewTitle(file.name);
    };

    const handleChange: UploadProps['onChange'] = async ({ fileList: newFileList, file }) => {
        // Handle file removal
        if (file.status === 'removed') {
            const removedFile = fileList.find(f => f.uid === file.uid);
            if (removedFile && 'image_id' in removedFile) {
                await deleteImage({
                    taskId: task.id,
                    imageId: removedFile.image_id
                });
            }
        }
        setFileList(newFileList);
    };

    const handleUpload = () => {
        const formData = new FormData();
        // Only upload new files (not existing ones)
        const newFiles = fileList.filter(file => file.originFileObj);
        newFiles.forEach((file) => {
            if (file.originFileObj) {
                formData.append('images', file.originFileObj);
            }
        });

        if (newFiles.length > 0) {
            uploadImages({
                id: task.id,
                formData: formData
            });
        }
    };

    const beforeUpload = (file: RcFile) => {
        const isImage = file.type.startsWith('image/');
        if (!isImage) {
            message.error('Chỉ có thể tải lên file ảnh!');
            return false;
        }

        const isLt5M = file.size / 1024 / 1024 < 5;
        if (!isLt5M) {
            message.error('Ảnh phải nhỏ hơn 5MB!');
            return false;
        }

        const totalFiles = fileList.length + 1;
        if (totalFiles > 10) {
            message.error('Chỉ có thể tải lên tối đa 10 ảnh!');
            return false;
        }

        return true;
    };

    return (
        <Modal
            open={isOpen}
            onCancel={onClose}
            title={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold">Ảnh công việc: {task?.name}</h2>
                    <span className="text-sm text-gray-500">
                        {fileList.length}/10 ảnh
                    </span>
                </div>
            }
            footer={[
                <Button
                    key="cancel"
                    onClick={onClose}
                    className="bg-gray-100 text-gray-600"
                >
                    Đóng
                </Button>,
                <Button
                    key="upload"
                    type="primary"
                    onClick={handleUpload}
                    disabled={!fileList.some(file => file.originFileObj)}
                    className="bg-blue-600"
                >
                    Tải lên
                </Button>
            ]}
            width={800}
            centered
        >
            <div className="p-6">
                <Upload
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={handlePreview}
                    onChange={handleChange}
                    beforeUpload={beforeUpload}
                    multiple
                    maxCount={10}
                    accept="image/*"
                >
                    {fileList.length >= 10 ? null : (
                        <div className="flex flex-col items-center justify-center py-4">
                            <PhotoIcon className="w-8 h-8 text-gray-400" />
                            <div className="mt-2 text-sm text-gray-500">
                                Tải ảnh lên
                            </div>
                            <div className="mt-1 text-xs text-gray-400">
                                Tối đa 10 ảnh
                            </div>
                        </div>
                    )}
                </Upload>

                <Modal
                    open={previewOpen}
                    title={previewTitle}
                    footer={null}
                    onCancel={() => setPreviewOpen(false)}
                >
                    <img alt="preview" className="w-full" src={previewImage} />
                </Modal>
            </div>
        </Modal>
    );
};