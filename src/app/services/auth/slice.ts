// 4
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { service } from "./api";
import { IAuth } from "./type";
import { ApiResponsive } from "@/app/utils/axiosClient";
const namespace = 'auth';

// Interface cho state
interface AuthState {
    isLoading: boolean;
    isError: boolean;
    data: any; // Nếu biết kiểu dữ liệu trả về, thay any bằng kiểu cụ thể
    message: string | null;
}

// Interface cho payload trả về khi login thành công
interface LoginSuccessPayload {
    data: any; // Thay any bằng kiểu dữ liệu user nếu có
    message: string;
}

// Interface cho payload trả về khi login thất bại
interface LoginErrorPayload {
    message: string;
    errors?: any;
}

export const loginAction = createAsyncThunk<LoginSuccessPayload, IAuth>(
    `${namespace}/login`,
    async (data, { rejectWithValue }) => {
        try {
            const response = await service.login(data) as ApiResponsive;

            if (response.statusCode === 200) {
                const { data, message } = response;
                return { data, message };
            } else {
                const { message, errors } = response;
                return rejectWithValue({ message, errors });
            }
        } catch (error: any) {
            return rejectWithValue({ message: error.message || "Unknown error" });
        }
    }
);



const initialState: AuthState = {
    isLoading: false,
    isError: false,
    data: null,
    message: null
};

const slice = createSlice({
    name: namespace,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginAction.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.data = null;
                state.message = null;
            })
            .addCase(loginAction.fulfilled, (state, action: PayloadAction<LoginSuccessPayload>) => {
                state.isLoading = false;
                state.isError = false;
                state.data = action.payload.data;
                state.message = action.payload.message;
            })
            .addCase(loginAction.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = false;
                state.isError = true;
                state.data = null;
                state.message = action.payload?.message || "Đăng nhập thất bại";
            });
    }
});

export const selectAuth = (state: { auth: AuthState }) => state.auth;

export default slice.reducer;