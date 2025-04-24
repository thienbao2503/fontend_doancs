// 3
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../services/auth/slice"
const store = configureStore({
    reducer: {
        auth: authReducer
    }
})
export default store;