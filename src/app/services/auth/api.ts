// 5
import { ApiResponsive, axiosClient } from "@/app/utils/axiosClient"
import { ILogin, IRegister } from "./type"
const moduleName = 'auth'
export const service = {
    login: async (data: ILogin) => {
        try {
            const response = await axiosClient({
                method: 'POST',
                url: `${moduleName}/login`,
                data: data
            }) as ApiResponsive

            return response
        } catch (error) {
            throw error
        }
    },
    register: async (data: IRegister) => {
        try {
            const response = await axiosClient({
                method: 'POST',
                url: `${moduleName}/register`,
                data: data
            }) as ApiResponsive
            return response
        } catch (error) {
            throw error
        }
    },
    profile: async () => {
        try {
            const response = await axiosClient({
                method: 'GET',
                url: `${moduleName}/profile`,
            }) as ApiResponsive
            return response
        } catch (error) {
            throw error
        }
    },
    updateprofile: async (data: any) => {
        try {
            const response = await axiosClient({
                method: 'PATCH',
                url: `${moduleName}/profile`,
                data
            }) as ApiResponsive
            return response
        } catch (error) {
            throw error
        }
    },
    updattePassword: async (data: any) => {
        try {
            const response = await axiosClient({
                method: 'PATCH',
                url: `${moduleName}/change-password`,
                data
            }) as ApiResponsive
            return response
        } catch (error) {
            throw error
        }
    },
    create2FA: async () => {
        try {
            const response = await axiosClient({
                method: 'POST',
                url: `${moduleName}/create2fa`,
            }) as ApiResponsive
            return response
        } catch (error) {
            throw error
        }
    },
    verify2FA: async (data: any) => {
        try {
            const response = await axiosClient({
                method: 'POST',
                url: `${moduleName}/verify2fa`,
                data
            }) as ApiResponsive
            return response
        } catch (error) {
            throw error
        }
    }

}