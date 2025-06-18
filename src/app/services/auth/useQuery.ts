import { useMutation, useQuery } from "@tanstack/react-query";
import { ILogin, IRegister } from "./type";
import { service } from "./api";
import { use } from "react";

export const useAuthQuery = {

    useLogin(onSuccess?: (data: any) => void, onError?: (error: any) => void) {
        return useMutation({

            mutationFn: async (payload: ILogin) => {
                const res = await service.login(payload);
                if (res?.statusCode === 200) return res;
                throw res;
            },
            onSuccess,
            onError,
        });
    },
    useRegister(onSuccess?: (data: any) => void, onError?: (error: any) => void) {
        return useMutation({
            mutationFn: async (payload: IRegister) => {
                const res = await service.register(payload);
                if (res?.statusCode === 200) return res;
                throw res;
            },
            onSuccess,
            onError,
        })
    },
    useProfile() {
        return useQuery({
            queryKey: ['profile'],
            queryFn: async () => {
                const res = await service.profile();
                if (res?.statusCode === 200) return res.data;
                throw res;
            },
        })
    },
    useUpdateProfile(onSuccess?: (data: any) => void, onError?: (error: any) => void) {
        return useMutation({
            mutationFn: async (payload: any) => {
                const res = await service.updateprofile(payload);
                if (res?.statusCode === 200) return res;
                throw res;
            },
            onSuccess,
            onError,
        })
    },
    useUpdatePassword(onSuccess?: (data: any) => void, onError?: (error: any) => void) {
        return useMutation({
            mutationFn: async (payload: any) => {
                const res = await service.updattePassword(payload);
                if (res?.statusCode === 200) return res;
                throw res;
            },
            onSuccess,
            onError,
        })
    },
    useCreate2fa(onSuccess?: (data: any) => void, onError?: (error: any) => void) {
        return useMutation({
            mutationFn: async () => {
                const res = await service.create2FA();
                if (res?.statusCode === 200) return res;
                throw res;
            },
            onSuccess,
            onError,
        })
    },
    useVerify2fa(onSuccess?: (data: any) => void, onError?: (error: any) => void) {
        return useMutation({
            mutationFn: async (payload: any) => {
                const res = await service.verify2FA(payload);
                if (res?.statusCode === 200) return res;
                throw res;
            },
            onSuccess,
            onError,
        })
    }



}