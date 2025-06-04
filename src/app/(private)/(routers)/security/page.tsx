"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import Tabs from "../Tabs";

export default function Profile() {
  const router = useRouter();
  const pathname = typeof window !== "undefined" ? window.location.pathname : "";
  const [activeTab, setActiveTab] = useState(pathname.includes("security") ? "security" : "profile");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    router.push(`/${tab}`);
  };

  return (
    <section className="bg-white flex justify-center p-4 overflow-hidden">
      <div className="w-full max-w-md mx-auto">
        {/* <Tabs /> */}
        <div className="bg-white rounded-lg p-6 w-full max-w-md border border-[#e0e0e0] shadow mx-auto">
          <h2 className="text-[#222] text-lg font-bold mb-6">Đổi mật khẩu</h2>
          <form>
            <label className="text-[#222] text-sm font-normal mb-1 block" htmlFor="current-password">
              Nhập mật khẩu cũ <span className="text-[#f44336]">*</span>
            </label>
            <div className="relative mb-5">
              <input
                id="current-password"
                type="password"
                placeholder="Nhập lại mật khẩu cũ"
                className="w-full rounded-md border border-[#e0e0e0] bg-white px-4 py-2 text-[#222] text-sm placeholder-[#bdbdbd] focus:outline-none focus:ring-1 focus:ring-[#1976d2]"
              />
              <i className="fas fa-eye absolute right-4 top-1/2 -translate-y-1/2 text-[#bdbdbd] cursor-pointer"></i>
            </div>
            <label className="text-[#222] text-sm font-normal mb-1 block" htmlFor="new-password">
              Mật khẩu mới <span className="text-[#f44336]">*</span>
            </label>
            <div className="relative mb-2">
              <input
                id="new-password"
                type="password"
                placeholder="Nhập mật khẩu mới"
                className="w-full rounded-md border border-[#e0e0e0] bg-white px-4 py-2 text-[#222] text-sm placeholder-[#bdbdbd] focus:outline-none focus:ring-1 focus:ring-[#1976d2]"
              />
              <i className="fas fa-eye absolute right-4 top-1/2 -translate-y-1/2 text-[#bdbdbd] cursor-pointer"></i>
            </div>
            <p className="text-[#757575] text-xs mb-6">
              Có ít nhất 8 ký tự hoặc nhiều hơn<br />
            </p>
            <button
              type="submit"
              className="bg-[#1976d2] text-white text-sm font-normal px-5 py-2 rounded-md float-right"
            >
              Cập nhật mật khẩu
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
