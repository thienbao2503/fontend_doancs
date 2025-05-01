// 4
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { service } from "./api";
import { ApiResponsive } from "@/app/utils/axiosClient";
import { IParmas, IState } from "./type";
const namespace = 'projects';


const getAllAction = createAsyncThunk<ApiResponsive, IParmas>(
    `${namespace}/getall`,
    async (data, { rejectWithValue }) => {
        try {
            const response = await service.getAll(data) as ApiResponsive;

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
export { getAllAction };

const initialState: IState = {
    isLoading: false,
    errors: [],
    data: [],
    message: null
};

const slice = createSlice({
    name: namespace,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        const setPending = (state: IState) => {
            state.isLoading = true;
            state.errors = [];
        };
        const setRejected = (state: IState, action: PayloadAction<any>) => {
            state.isLoading = false;
            state.errors = action.payload?.errors || []
            state.message = action.payload?.message
        };
        builder
            .addCase(getAllAction.pending, setPending)
            .addCase(getAllAction.fulfilled, (state, action: PayloadAction<ApiResponsive>) => {
                state.isLoading = false;
                state.errors = [];
                state.data = action.payload.data;
                state.message = action.payload.message;
            })
            .addCase(getAllAction.rejected, setRejected);
    }
});

export const selectProjects = (state: { projects: IState }) => state.projects;

const projectsReducer = slice.reducer;

export default projectsReducer