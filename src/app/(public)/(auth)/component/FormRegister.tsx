// 6
import { AppDispatch } from "@/app/redux/store";
import { loginAction } from "@/app/services/auth/slice";
import { ILogin, IRegister } from "@/app/services/auth/type";
import { EyeIcon, EyeSlashIcon, LockClosedIcon, UserIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
// Nếu dùng PhoneIcon thì cần import thêm:
import { PhoneIcon } from "@heroicons/react/24/outline";

function FormRegister() {
    const dispatch = useDispatch<AppDispatch>();
    const [showRegisterPassword, setShowRegisterPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        // Xử lý đăng ký ở đây
        // Ví dụ: gọi API đăng ký, validate dữ liệu, hiển thị toast,...
        toast.success("Đăng ký thành công (demo)");
    };

    const [showLoginPassword, setShowLoginPassword] = useState(false);
    const [data, setData] = useState<ILogin>({
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
            const payload: ILogin = {
                email: data.email,
                password: data.password
            }
            // Ép kiểu trả về cho action
            const action = await dispatch(loginAction(payload));
            if (loginAction.fulfilled.match(action)) {
                const { message, data, } = action.payload;
                // const { } = data.use
                // setToken()
                toast.success(message);
            } else {
                const { errors, message } = action.payload as any;
                toast.error(errors[0]?.message || message);
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <form onSubmit={handleRegister} className="space-y-6">
            <div className="relative">
                <label htmlFor="register-fullName" className="block text-sm font-medium text-gray-800 mb-2">
                    Họ Và Tên
                </label>
                <div className="relative">
                    <UserIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600" />
                    <input
                        id="register-fullName"
                        type="text"
                        name="fullName"
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
                    Email
                </label>
                <div className="relative">
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
            </div>

            <div className="relative">
                <label htmlFor="register-phoneNo" className="block text-sm font-medium text-gray-800 mb-2">
                    Số Điện Thoại
                </label>
                <div className="relative">
                    <PhoneIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600" />
                    <input
                        id="register-phoneNo"
                        type="tel"
                        name="phoneNo"
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
                className="w-full bg-gradient-to-r from-sky-500 to-sky-700 text-white py-3 rounded-xl font-semibold hover:from-sky-600 hover:to-sky-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="Register a new account"
            >
                Register
            </button>
        </form>
    );
}

export default FormRegister;