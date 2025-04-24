// 5
import { ApiResponsive, axiosClient } from "@/app/utils/axiosClient"
import { IAuth } from "./type"

export const service = {
    login: async (data: IAuth) => {
        try {
            const response = await axiosClient({
                method: 'POST',
                url: '/auth/login',
                data: data
            }) as ApiResponsive

            return response
        } catch (error) {

        }
    }
}