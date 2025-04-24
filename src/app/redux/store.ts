// 3
import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "../services/projects/slice";
import authReducer from "../services/auth/slice";
const store = configureStore({
    reducer: {
        auth: authReducer,
        projects: projectsReducer,
    }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;