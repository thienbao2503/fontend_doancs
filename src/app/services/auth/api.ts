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
    }
}