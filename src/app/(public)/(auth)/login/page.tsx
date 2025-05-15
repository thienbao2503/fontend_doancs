"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FormLogin, FormRegister, TabsCustoms } from "../component";
import { getToken } from "@/app/utils/tokenServiceClientSide";

export default function Auth() {
  const router = useRouter()
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    checkToken()
  }, [])

  const checkToken = () => {
    const { accessToken, refreshToken } = getToken()
    if (accessToken && refreshToken) router.push("/tong-quan")
  }

  return (
    <div className="min-h-screen flex  justify-center bg-gradient-to-br from-sky-500 to-white p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-200 opacity-20"></div>
      <div className="relative bg-white/20 backdrop-blur-lg h-fit mt-[10vh] shadow-2xl rounded-3xl p-10 max-w-lg w-full border border-white/20 transform transition-all duration-500 hover:shadow-3xl">
        <TabsCustoms handleChange={() => setIsLogin(!isLogin)} isLogin={isLogin} />
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-6 drop-shadow-md">
          {isLogin ? "Chào Mừng Bạn Trở Lại" : "Đăng Ký Tham Gia"}
        </h2>
        {isLogin ? <FormLogin /> : <FormRegister onRegisterSuccess={() => setIsLogin(true)} />}
      </div>

    </div>
  );
}