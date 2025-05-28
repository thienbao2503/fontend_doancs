// 5
import { ApiResponsive, axiosClient } from "@/app/utils/axiosClient"
import { IParmas } from "./type"

const moduleName = 'projects'

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
                data: data
            }) as ApiResponsive
            return response
        } catch (error) {
            console.error(error);
        }
    },
    getByID: async (id: number) => {
        try {
            const response = await axiosClient({
                method: 'GET',//use GET use query
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
                data,
                headers: {
                    "project_id": id
                }
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
    addTeam: async (id: number, data: any) => {
        try {
            const response = await axiosClient({
                method: 'POST',
                url: `${moduleName}/team/add-user/${id}`,
                data: data,
                headers: {
                    "project_id": id
                }
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
                data: { user_id: user_id },
                headers: {
                    "project_id": id
                }
            }) as ApiResponsive
            return response
        } catch (error) {
            console.error(error);
        }
    },
    //get team
    getTeam: async (params: { project_id?: number }) => {
        try {
            const response = await axiosClient({
                method: 'GET',
                url: `${moduleName}/team`,
                params
            }) as ApiResponsive
            return response
        } catch (error) {
            console.error(error);
        }
    }
}