"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  LockClosedIcon,
  UserIcon,
  EyeIcon,
  EyeSlashIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

export default function Auth() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    fullName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState({ text: "", type: "" });
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [forgotEmail, setForgotEmail] = useState(""); // State for email/mobile input in modal

  const handleLoginInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
    setMessage({ text: "", type: "" });
  };

  const handleRegisterInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData((prev) => ({ ...prev, [name]: value }));
    setMessage({ text: "", type: "" });
  };

  const handleForgotInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForgotEmail(e.target.value);
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = loginData;

    if (!email || !password) {
      setMessage({ text: "Please fill in all fields.", type: "error" });
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    if (storedUser.email === email && storedUser.password === password) {
      localStorage.setItem("accessToken", "sdfghjkxcvbn");
      setMessage({ text: "Login successful! Redirecting...", type: "success" });
      setTimeout(() => router.push("/dashboard"), 1500);
    } else {
      setMessage({ text: "Invalid email or password.", type: "error" });
    }
  };

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { fullName, lastName, email, phoneNo, password, confirmPassword } = registerData;

    if (!fullName || !lastName || !email || !phoneNo || !password || !confirmPassword) {
      setMessage({ text: "Please fill in all fields.", type: "error" });
      return;
    }

    if (password !== confirmPassword) {
      setMessage({ text: "Passwords do not match.", type: "error" });
      return;
    }

    localStorage.setItem("user", JSON.stringify({ fullName, lastName, email, phoneNo, password }));
    setMessage({ text: "Registration successful! Please login.", type: "success" });
    setTimeout(() => setIsLogin(true), 1500);
    setRegisterData({
      fullName: "",
      lastName: "",
      email: "",
      phoneNo: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleForgotPassword = () => {
    setIsModalOpen(true); // Open the modal when "Forgot Password?" is clicked
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setForgotEmail(""); // Reset email input when closing
  };

  const handleForgotSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!forgotEmail) {
      setMessage({ text: "Please enter an email or mobile number.", type: "error" });
      return;
    }
    setMessage({ text: "Password reset link sent to your email.", type: "success" });
    setIsModalOpen(false); // Close the modal after submission
    setForgotEmail(""); // Reset the input field
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-500 to-white p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-200 opacity-20"></div>

      <div className="relative bg-white/20 backdrop-blur-lg shadow-2xl rounded-3xl p-10 max-w-lg w-full border border-white/20 transform transition-all duration-500 hover:shadow-3xl">
        <div className="flex justify-center mb-8 bg-white/30 rounded-full p-1">
          <button
            onClick={() => setIsLogin(true)}
            className={`px-6 py-2 text-lg font-semibold rounded-full transition-all duration-300 ${
              isLogin ? "bg-white text-sky-700 shadow-md" : "text-gray-700"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`px-6 py-2 text-lg font-semibold rounded-full transition-all duration-300 ${
              !isLogin ? "bg-white text-sky-700 shadow-md" : "text-gray-700"
            }`}
          >
            Register
          </button>
        </div>

        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-6 drop-shadow-md">
          {isLogin ? "Welcome Back" : "Join Us"}
        </h2>

        {message.text && (
          <div
            className={`mb-6 p-3 rounded-lg text-sm text-center ${
              message.type === "error"
                ? "bg-red-500/20 text-red-700"
                : "bg-sky-500/20 text-sky-700"
            } animate-fade-in`}
          >
            {message.text}
          </div>
        )}

        {/* Login Form */}
        {isLogin ? (
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="relative">
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Email
              </label>
              <div className="relative">
              <UserIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600" />                <input
                  id="login-email"
                  type="email"
                  name="email"
                  value={loginData.email}
                  onChange={handleLoginInputChange}
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
                  value={loginData.password}
                  onChange={handleLoginInputChange}
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

            <div className="text-right">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-sm text-gray-700 hover:text-gray-900 hover:underline focus:outline-none transition-colors duration-300"
                aria-label="Forgot your password"
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-sky-500 to-sky-700 text-white py-3 rounded-xl font-semibold hover:from-sky-600 hover:to-sky-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Login to your account"
            >
              Login
            </button>
          </form>
        ) : (
          /* Register Form */
          <form onSubmit={handleRegister} className="space-y-6">
            <div className="relative">
              <label htmlFor="register-fullName" className="block text-sm font-medium text-gray-800 mb-2">
                Full Name
              </label>
              <div className="relative">
                <UserIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600" />
                <input
                  id="register-fullName"
                  type="text"
                  name="fullName"
                  value={registerData.fullName}
                  onChange={handleRegisterInputChange}
                  placeholder="Enter your full name"
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
            </div>

            <div className="relative">
              <label htmlFor="register-lastName" className="block text-sm font-medium text-gray-800 mb-2">
                Last Name
              </label>
              <div className="relative">
                <UserIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600" />
                <input
                  id="register-lastName"
                  type="text"
                  name="lastName"
                  value={registerData.lastName}
                  onChange={handleRegisterInputChange}
                  placeholder="Enter your last name"
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
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
            </div>

            <div className="relative">
              <label htmlFor="register-phoneNo" className="block text-sm font-medium text-gray-800 mb-2">
                Phone No.
              </label>
              <div className="relative">
                <PhoneIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600" />
                <input
                  id="register-phoneNo"
                  type="tel"
                  name="phoneNo"
                  value={registerData.phoneNo}
                  onChange={handleRegisterInputChange}
                  placeholder="Enter your phone number"
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
            </div>

            <div className="relative">
              <label htmlFor="register-password" className="block text-sm font-medium text-gray-800 mb-2">
                Password
              </label>
              <div className="relative">
                <LockClosedIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600" />
                <input
                  id="register-password"
                  type={showRegisterPassword ? "text" : "password"}
                  name="password"
                  value={registerData.password}
                  onChange={handleRegisterInputChange}
                  placeholder="Create a password"
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

            <div className="relative">
              <label htmlFor="register-confirmPassword" className="block text-sm font-medium text-gray-800 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <LockClosedIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600" />
                <input
                  id="register-confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={registerData.confirmPassword}
                  onChange={handleRegisterInputChange}
                  placeholder="Confirm your password"
                  className="w-full pl-12 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-300"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 transition-colors duration-300"
                  aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                >
                  {showConfirmPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
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
        )}
      </div>

      {/* Forgot Password Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Find Your Account</h3>
            <p className="text-gray-600 mb-4">
              Please enter your email address or mobile number to search for your account.
            </p>
            <form onSubmit={handleForgotSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  value={forgotEmail}
                  onChange={handleForgotInputChange}
                  placeholder="Email address or mobile number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={handleModalClose}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}