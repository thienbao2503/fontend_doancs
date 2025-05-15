import { useMutation } from "@tanstack/react-query";
import { ILogin, IRegister } from "./type";
import { service } from "./api";

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
    }

}