import { ApiResponsive } from "@/app/utils/axiosClient";

interface IParmas {
    page?: number;
    limit?: number;
    project_id?: number;
}

interface IData {
    id: number;
    name: string;
    description: string;
    user_id: number;
    teams: any[];
    start_date: string;
    end_date: string;
    status: string;
    created_at: string;
    updated_at: string;
}

interface IState extends ApiResponsive {
    isLoading: boolean;
    data: IData[];
}

export type { IState, IParmas, IData }