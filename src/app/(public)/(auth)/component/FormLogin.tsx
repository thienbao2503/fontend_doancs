// 6
'use client'
import { loginAction, selectAuth } from "@/app/services/auth/slice";
import { IAuth } from "@/app/services/auth/type";
import { setToken } from "@/app/utils/tokenServiceClientSide";
import { EyeIcon, EyeSlashIcon, LockClosedIcon, UserIcon } from "@heroicons/react/24/outline";
import { Action } from "@reduxjs/toolkit";
import { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function FormLogin() {
    const dispatch = useDispatch();
    const [showLoginPassword, setShowLoginPassword] = useState(false);
    const [data, setData] = useState<IAuth>({
        email: "",
        password: ""
    })
    const handleChange = (field: string, value: string) => {
        setData({
            ...data,
            [field]: value
        })
    }

    const handleLogin = async () => {
        try {
            const payload: IAuth = {
                email: data.email,
                password: data.password
            }
            // Ép kiểu trả về cho action
            const action = await dispatch(loginAction(payload) as any);
            if (loginAction.fulfilled.match(action)) {
                const { message, data } = action.payload;
                const { } = data.use
                // setToken()
                toast.success(message);
            } else {
                const { message, errors } = action.payload;
                toast.error(errors[0]?.message || message);
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <form className="space-y-6">
            <div className="relative">
                <label className="block text-sm font-medium text-gray-800 mb-2">
                    Email
                </label>
                <div className="relative">
                    <UserIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600" />                <input
                        id="login-email"
                        type="email"
                        value={data.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="Enter your email"
                        className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-300"
                        required
                    />
                </div>
            </div>

            <div className="relative">
                <label htmlFor="login-password" className="block text-sm font-medium text-gray-800 mb-2">
                    Password
                </label>
                <div className="relative">
                    <LockClosedIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600" />
                    <input
                        id="login-password"
                        type={showLoginPassword ? "text" : "password"}
                        name="password"
                        value={data.password}
                        onChange={(e) => handleChange("password", e.target.value)}
                        placeholder="Enter your password"
                        className="w-full pl-12 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-300"
                        required
                    />
                    <button
                        type="button"
                        onClick={() => setShowLoginPassword(!showLoginPassword)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 transition-colors duration-300"
                        aria-label={showLoginPassword ? "Hide password" : "Show password"}
                    >
                        {showLoginPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                    </button>
                </div>
            </div>


            <button
                type="button"

                className="w-full bg-gradient-to-r from-sky-500 to-sky-700 text-white py-3 rounded-xl font-semibold hover:from-sky-600 hover:to-sky-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="Login to your account"
                onClick={handleLogin}
            >
                Login
            </button>
        </form>
    );
}

export default FormLogin;