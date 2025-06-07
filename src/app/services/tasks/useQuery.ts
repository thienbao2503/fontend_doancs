import { useMutation, useQuery } from "@tanstack/react-query";
import { service } from "./api";
import { IParmas } from "./type";

export const useTaskQuery = {
    useGetAll(params: IParmas) {
        return useQuery({
            queryKey: ['task', params],
            queryFn: async () => {
                const res = await service.getAll(params);
                if (res?.statusCode === 200) return {
                    data: res.data,
                    pagination: res.pagination,
                }
                throw res;
            },
        });
    },
    useCreate(onSuccess?: (data: any) => void, onError?: (error: any) => void) {
        return useMutation({
            mutationFn: async (data: any) => {
                const res = await service.create(data);
                if (res?.statusCode === 200) return res
                throw res;
            },
            onSuccess,
            onError,
        });
    },
    useGetByID(onSuccess?: (data: any) => void, onError?: (error: any) => void) {
        return useMutation({
            mutationFn: async (id: number) => {
                const res = await service.getByID(id);
                if (res?.statusCode === 200) return res.data
                throw res;
            },
            onSuccess,
            onError,
        });
    },
    //update
    useUpdate(onSuccess?: (data: any) => void, onError?: (error: any) => void) {
        return useMutation({
            mutationFn: async (data: any) => {
                const res = await service.update(data.id, data);
                if (res?.statusCode === 200) return res
                throw res;
            },
            onSuccess,
            onError,
        });
    },
    //delete
    useDelete(onSuccess?: (data: any) => void, onError?: (error: any) => void) {
        return useMutation({
            mutationFn: async (id: number) => {
                const res = await service.delete(id);
                if (res?.statusCode === 200) return res
                throw res;
            },
            onSuccess,
            onError,
        })
    },
    // assign
    useAssign(onSuccess?: (data: any) => void, onError?: (error: any) => void) {
        return useMutation({
            mutationFn: async (data: any) => {
                const res = await service.assign(data.id, data);
                if (res?.statusCode === 200) return res
                throw res;
            },
            onSuccess,
            onError,
        });
    },
    useUpdateSupervisorProgress(onSuccess?: (data: any) => void, onError?: (error: any) => void) {
        return useMutation({
            mutationFn: async (data: any) => {
                const res = await service.updateSupervisorProgress(data.id, data);
                if (res?.statusCode === 200) return res
                throw res;
            },
            onSuccess,
            onError,
        });
    },
    useUpdateContractorProgress(onSuccess?: (data: any) => void, onError?: (error: any) => void) {
        return useMutation({
            mutationFn: async (data: any) => {
                const res = await service.updateContractorProgress(data.id, data);
                if (res?.statusCode === 200) return res
                throw res;
            },
            onSuccess,
            onError,
        });
    },
    useUploadImages(onSuccess?: (data: any) => void, onError?: (error: any) => void) {
        return useMutation({
            mutationFn: async (data: any) => {
                const res = await service.uploadImages(data.id, data.project_id, data.formData);
                if (res?.statusCode === 200) return res
                throw res;
            },
            onSuccess,
            onError,
        });
    },
    useDeleteImage(onSuccess?: (data: any) => void, onError?: (error: any) => void) {
        return useMutation({
            mutationFn: async (data: any) => {
                const res = await service.deleteImage(data.taskId, data.imageId);
                if (res?.statusCode === 200) return res
                throw res;
            },
            onSuccess,
            onError,
        });
    },
}