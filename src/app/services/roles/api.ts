// 5
import { ApiResponsive, axiosClient } from "@/app/utils/axiosClient"
import { IParmas } from "./type"

const moduleName = 'roles'

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
    addTeam: async (id: number, email: any) => {
        try {
            const response = await axiosClient({
                method: 'POST',
                url: `${moduleName}/team/add-user/${id}`,
                data: { email }
            }) as ApiResponsive
            return response
        } catch (error) {
            console.error(error);
        }

    },
    deleteTeam: async (id: number, user_id: number) => {
        try {
            const response = await axiosClient({
                method: 'DELETE',
                url: `${moduleName}/team/${id}`,
                data: { user_id: user_id }
            }) as ApiResponsive
            return response
        } catch (error) {
            console.error(error);
        }
    },
    updateConfig: async (id: number, data: any) => {
        try {
            const response = await axiosClient({
                method: 'PUT',
                url: `${moduleName}/config/${id}`,
                data
            }) as ApiResponsive
            return response
        } catch (error) {
            console.error(error);
        }
    }
}