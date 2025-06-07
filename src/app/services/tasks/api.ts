// 5
import { ApiResponsive, axiosClient } from "@/app/utils/axiosClient"
import { IParmas } from "./type"

const moduleName = 'task'

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
                data,
                headers: {
                    "project_id": data.project_id
                }
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
                data,
                headers: {
                    "project_id": data.project_id
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
    assign: async (id: number, data: any) => {
        try {
            const response = await axiosClient({
                method: 'POST',
                url: `${moduleName}/assign/${id}`,
                data,
                headers: {
                    "project_id": data.project_id
                }
            }) as ApiResponsive
            return response
        } catch (error) {
            console.error(error);
        }
    },
    updateContractorProgress: async (id: number, data: any) => {
        try {
            const response = await axiosClient({
                method: 'PATCH',
                url: `${moduleName}/update-progress/${id}`,
                data,
                headers: {
                    "project_id": data.project_id
                }
            }) as ApiResponsive
            return response
        } catch (error) {
            console.error(error);
        }
    },
    updateSupervisorProgress: async (id: number, data: any) => {
        console.log(`Updating supervisor progress for task ID: ${id}`, data);

        try {
            const response = await axiosClient({
                method: 'PATCH',
                url: `${moduleName}/confirm-result/${id}`,
                data,
                headers: {
                    "project_id": data.project_id
                }
            }) as ApiResponsive
            return response
        } catch (error) {
            console.error(error);
        }
    },
    uploadImages: async (id: number, project_id: number, formData: any) => {
        try {
            const response = await axiosClient({
                method: 'POST',
                url: `${moduleName}/upload-images/${id}`,
                data: formData,
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            }) as ApiResponsive
            return response
        } catch (error) {
            console.error(error);
        }
    },
    deleteImage: async (taskId: number, imageId: number) => {
        try {
            const response = await axiosClient({
                method: 'DELETE',
                url: `${moduleName}/delete-image`,
                data: {
                    taskId,
                    imageId
                }
            }) as ApiResponsive
            return response
        } catch (error) {
            console.error(error);
        }
    }


}