import { useMutation, useQuery } from "@tanstack/react-query";
import { service } from "./api";
import { IParmas } from "./type";

export const useTeamQuery = {
    useGetAll(params: IParmas) {
        return useQuery({
            queryKey: ['team', params],
            queryFn: async () => {
                const res = await service.getAll(params);
                if (res?.statusCode === 200) return res.data
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


}