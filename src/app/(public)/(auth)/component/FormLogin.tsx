import { ILogin } from "@/app/services/auth/type";
import { useAuthQuery } from "@/app/services/auth/useQuery";
import { setToken } from "@/app/utils/tokenServiceClientSide";
import { EyeIcon, EyeSlashIcon, LockClosedIcon, UserIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

function FormLogin() {
    const router = useRouter();
    const { mutate: handleLogin, isPending } = useAuthQuery.useLogin(
        (res) => {
            const { message, data } = res;
            const { access_token, refresh_token } = data?.tokens;
            setToken(access_token, refresh_token);
            router.push("/tong-quan");
            toast.success(message);
        },
        (error) => {
            toast.error(error.errors[0]?.message);
        }
    );

    const [showLoginPassword, setShowLoginPassword] = useState(false);
    const [data, setData] = useState<ILogin>({
        email: "",
        password: "",
    });

    const [isForgotPassword, setIsForgotPassword] = useState(false); // Toggle between login and forgot password
    const [otp, setOtp] = useState(""); // OTP state
    const [emailForOtp, setEmailForOtp] = useState(""); // Email for OTP

    const handleChange = (field: string, value: string) => {
        setData({
            ...data,
            [field]: value,
        });
    };

    const handleSendOtp = () => {
        // Logic to send OTP
        toast.success("OTP đã được gửi đến email của bạn!");
    };

    const handleVerifyOtp = () => {
        // Logic to verify OTP
        toast.success("OTP xác thực thành công!");
    };

    return (
        <form className="space-y-6">
            {!isForgotPassword ? (
                <>
                    {/* Login Form */}
                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-800 mb-2">Email</label>
                        <div className="relative">
                            <UserIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600" />
                            <input
                                id="login-email"
                                type="email"
                                value={data.email}
                                onChange={(e) => handleChange("email", e.target.value)}
                                placeholder="Nhập Email"
                                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-300"
                                required
                            />
                        </div>
                    </div>

                    <div className="relative">
                        <label htmlFor="login-password" className="block text-sm font-medium text-gray-800 mb-2">
                            Mật Khẩu
                        </label>
                        <div className="relative">
                            <LockClosedIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600" />
                            <input
                                id="login-password"
                                type={showLoginPassword ? "text" : "password"}
                                name="password"
                                value={data.password}
                                onChange={(e) => handleChange("password", e.target.value)}
                                placeholder="Nhập mật khẩu"
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
                        className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-sky-500 to-sky-700 text-white py-3 rounded-xl font-semibold hover:from-sky-600 hover:to-sky-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                        aria-label="Login to your account"
                        onClick={() => handleLogin(data)}
                        disabled={isPending}
                    >
                        {isPending && <i className="fi fi-rr-loading animate-spin "></i>}
                        Đăng Nhập
                    </button>
                    <p
                        className="text-center text-sm text-sky-600 mt-4 hover:underline cursor-pointer"
                        onClick={() => setIsForgotPassword(true)}
                    >
                        Quên mật khẩu?
                    </p>
                </>
            ) : (
                <>
                
                    {/* Forgot Password Form */}
                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-800 mb-2">Email</label>
                        <div className="relative">
                            <UserIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600" />
                            <input
                                id="forgot-email"
                                type="email"
                                value={emailForOtp}
                                onChange={(e) => setEmailForOtp(e.target.value)}
                                placeholder="Nhập Email để nhận OTP"
                                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-300"
                                required
                            />
                        </div>
                        <button
                            type="button"
                            className="mt-4 w-full bg-sky-600 text-white py-3 rounded-xl font-semibold hover:bg-sky-700 transition-all duration-300"
                            onClick={handleSendOtp}
                        >
                            Gửi OTP
                        </button>
                    </div>

                    <div className="relative mt-4">
                        <label htmlFor="otp" className="block text-sm font-medium text-gray-800 mb-2">
                            Nhập OTP
                        </label>
                        <input
                            id="otp"
                            type="text"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            placeholder="Nhập mã OTP"
                            className="w-full pl-4 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-300"
                            maxLength={6}
                            required
                        />
                        <button
                            type="button"
                            className="mt-4 w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300"
                            onClick={handleVerifyOtp}
                        >
                            Xác Thực OTP
                        </button>
                    </div>
                    <p
                        className="text-center text-sm text-sky-600 mt-4 hover:underline cursor-pointer"
                        onClick={() => setIsForgotPassword(false)}
                    >
                        Quay lại đăng nhập
                    </p>
                </>
            )}
        </form>
    );
}

export default FormLogin;