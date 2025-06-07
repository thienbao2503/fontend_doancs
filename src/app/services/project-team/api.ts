// 5
import { ApiResponsive, axiosClient } from "@/app/utils/axiosClient"
import { IParmas } from "./type"

const moduleName = 'teams'

export const service = {
    getAll: async (params: IParmas) => {
        try {
            const response = await axiosClient({
                method: 'GET',
                url: `${moduleName}`,
                params
            }) as ApiResponsive

            return response
        } catch (error) {
            console.error(error);
        }
    },
    create: async (data: any) => {
        try {
            const response = await axiosClient({
                method: 'POST',
                url: `${moduleName}`,
                data
            }) as ApiResponsive
            return response
        } catch (error) {
            console.error(error);
        }
    },
    getByID: async (id: number) => {
        try {
            const response = await axiosClient({
                method: 'GET',
                url: `${moduleName}/${id}`
            }) as ApiResponsive
            return response
        } catch (error) {
            console.error(error);
        }
    },
    update: async (id: number, data: any) => {
        try {
            const response = await axiosClient({
                method: 'PATCH',
                url: `${moduleName}/${id}`,
                data
            }) as ApiResponsive
            return response
        } catch (error) {
            console.error(error);
        }
    },
    delete: async (id: number) => {
        try {
            const response = await axiosClient({
                method: 'DELETE',
                url: `${moduleName}/${id}`
            }) as ApiResponsive
            return response
        } catch (error) {
            console.error(error);
        }
    },

}