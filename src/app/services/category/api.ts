// 5
import { ApiResponsive, axiosClient } from "@/app/utils/axiosClient"
import { IParmas } from "./type"

const moduleName = 'project-category'

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
}