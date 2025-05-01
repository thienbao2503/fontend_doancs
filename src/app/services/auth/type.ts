import { ApiResponsive } from "@/app/utils/axiosClient";

interface ILogin {
    email: string;
    password: string;
}
interface IRegister extends ILogin {
    full_name: string;
    phone: string
}

interface IState extends ApiResponsive {
    isLoading: boolean;
}

export type { ILogin, IState, IRegister }