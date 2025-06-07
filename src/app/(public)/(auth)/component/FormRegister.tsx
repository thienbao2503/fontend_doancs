// 6
import { ILogin, IRegister } from "@/app/services/auth/type";
import { EyeIcon, EyeSlashIcon, LockClosedIcon, UserIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import toast from "react-hot-toast";
// Nếu dùng PhoneIcon thì cần import thêm:
import { PhoneIcon } from "@heroicons/react/24/outline";
import { useAuthQuery } from "@/app/services/auth/useQuery";

function FormRegister({ onRegisterSuccess }: { onRegisterSuccess: () => void }) {
    const { mutate: handleRegister, isPending } = useAuthQuery.useRegister(
        (res) => {
            const { message } = res
            toast.success(message)
            onRegisterSuccess()
        },
        (error) => {
            toast.error(error.errors[0]?.message)
        }
    )
    const [showRegisterPassword, setShowRegisterPassword] = useState(false);
    const [registerData, setRegisterData] = useState<IRegister>({
        full_name: "",
        email: "",
        phone: "",
        password: "",
    });

    const handleRegisterInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegisterData({
            ...registerData,
            [e.target.name]: e.target.value
        });
    };

    const handleRegisterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleRegister(registerData);
    };

    return (
        <form className="space-y-6" onSubmit={handleRegisterSubmit}>
            <div className="relative">
                <label htmlFor="register-full_name" className="block text-sm font-medium text-gray-800 mb-2">
                    Họ Và Tên
                </label>
                <div className="relative">
                    <UserIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600" />
                    <input
                        id="register-full_name"
                        type="text"
                        name="full_name"
                        value={registerData.full_name}
                        onChange={handleRegisterInputChange}
                        placeholder="Nhập họ và tên"
                        className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-300"
                        required
                    />
                </div>
            </div>

            <div className="relative">
                <label htmlFor="register-email" className="block text-sm font-medium text-gray-800 mb-2">
                    {/* Email (Nhận mã xác thực OTP) */}
                    Email
                </label>
                <div className="flex items-center">
                    <div className="relative flex-1">
                        <UserIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600" />
                        <input
                            id="register-email"
                            type="email"
                            name="email"
                            value={registerData.email}
                            onChange={handleRegisterInputChange}
                            placeholder="Nhập email"
                            className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-300"
                            required
                        />
                    </div>
                    {/* <button
                        className="ml-4 text-sm text-sky-600 hover:underline cursor-pointer whitespace-nowrap"
                        type="button">
                        Gửi OTP
                        </button> */}
                </div>
            </div>

            {/* <div className="relative mt-4">
            <label htmlFor="register-otp" className="block text-sm font-medium text-gray-800 mb-2">
                Xác thực OTP
            </label>
            <div className="relative">
                <input
                id="register-otp"
                type="text"
                name="otp"
            
                onChange={handleRegisterInputChange}
                placeholder="Nhập mã OTP gồm 6 chữ số"
                className="w-full pl-4 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-300"
                maxLength={6}
                pattern="\d{6}"
                required
                />
            </div>
            </div> */}

            <div className="relative">
                <label htmlFor="register-phone" className="block text-sm font-medium text-gray-800 mb-2">
                    Số Điện Thoại
                </label>
                <div className="relative">
                    <PhoneIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600" />
                    <input
                        id="register-phone"
                        type="tel"
                        name="phone"
                        value={registerData.phone}
                        onChange={handleRegisterInputChange}
                        placeholder="Nhập số điện thoại"
                        className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-300"
                        required
                    />
                </div>
            </div>

            <div className="relative">
                <label htmlFor="register-password" className="block text-sm font-medium text-gray-800 mb-2">
                    Mật Khẩu
                </label>
                <div className="relative">
                    <LockClosedIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600" />
                    <input
                        id="register-password"
                        type={showRegisterPassword ? "text" : "password"}
                        name="password"
                        value={registerData.password}
                        onChange={handleRegisterInputChange}
                        placeholder="Nhập mật khẩu"
                        className="w-full pl-12 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-300"
                        required
                    />
                    <button
                        type="button"
                        onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 transition-colors duration-300"
                        aria-label={showRegisterPassword ? "Hide password" : "Show password"}
                    >
                        {showRegisterPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            <button
                type="submit"
                className="w-full  gap-2 bg-gradient-to-r from-sky-500 to-sky-700 text-white py-3 rounded-xl font-semibold hover:from-sky-600 hover:to-sky-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                aria-label="Register a new account"
                disabled={isPending}
            >
                {isPending && <i className="fi fi-rr-loading animate-spin "></i>}
                Đăng Ký
            </button>
        </form>
    );
}

export default FormRegister;