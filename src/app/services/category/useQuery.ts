import { useQuery } from "@tanstack/react-query";
import { service } from "./api";
import { IParmas } from "./type";

export const useCategoryQuery = {
    useGetAll(params: IParmas) {
        return useQuery({
            queryKey: ['categpry', params],
            queryFn: async () => {
                const res = await service.getAll(params);
                if (res?.statusCode === 200) return res.data
                throw res;
            },
        });
    },

}