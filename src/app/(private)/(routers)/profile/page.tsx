"use client"
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useAuthQuery } from "@/app/services/auth/useQuery";
import { service } from "@/app/services/auth/api";
import Tabs from "../Tabs";




export default function profile() {
  const router = useRouter();
  const pathname = typeof window !== "undefined" ? window.location.pathname : "";
  const [activeTab, setActiveTab] = useState(pathname.includes("security") ? "security" : "profile");
  const { data, isLoading } = useAuthQuery.useProfile();
  const [form, setForm] = useState({
    email: "",
    name: "",
    phone: "",
    gender: "",
  });

  useEffect(() => {
    if (data) {
      setForm({
        email: data.email || "",
        name: data.full_name || "",
        phone: data.phone || "",
        gender: data.gender || "",
      });
    }
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await service.updateprofile({
      email: form.email,
      full_name: form.name,
      phone: form.phone,
      gender: form.gender,
    });
    // Có thể thêm thông báo thành công ở đây
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    router.push(`/${tab}`);
  };

  return (
    <section className="bg-white flex justify-center p-4 overflow-hidden">
      <div className="w-full max-w-md mx-auto">
        <Tabs />
        <div className="flex space-x-2 mb-6 justify-center transition-all duration-300">
         
        </div>
        <form
          className="bg-white rounded-lg p-6 text-[#222] text-sm space-y-4 border border-[#e0e0e0] shadow"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <h2 className="text-left font-bold text-base mb-2">Cập nhật thông tin</h2>
          <div>
            <label htmlFor="email" className="block font-semibold mb-1 text-[#222]">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-md bg-white border border-[#e0e0e0] text-[#222] text-xs px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#1976d2]"
            />
          </div>
          <div>
            <label htmlFor="name" className="block font-semibold mb-1 text-[#222]">Tên đăng nhập</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-md bg-white border border-[#e0e0e0] text-[#222] text-xs px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#1976d2]"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block font-semibold mb-1 text-[#222]">Số điện thoại</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter Your Phone"
              className="w-full rounded-md bg-white border border-[#e0e0e0] text-[#222] text-xs px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#1976d2]"
            />
          </div>
          <div>
            <label htmlFor="gender" className="block font-semibold mb-1 text-[#222]">Giới tính</label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-1">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={form.gender === "male"}
                  onChange={handleChange}
                  className="accent-[#1976d2]"
                />
                <span>Nam</span>
              </label>
              <label className="flex items-center space-x-1">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={form.gender === "female"}
                  onChange={handleChange}
                  className="accent-[#1976d2]"
                />
                <span>Nữ</span>
              </label>
              <label className="flex items-center space-x-1">
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={form.gender === "other"}
                  onChange={handleChange}
                  className="accent-[#1976d2]"
                />
                <span>Khác</span>
              </label>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#1976d2] px-4 py-2 rounded-md text-white text-xs font-medium"
              disabled={isLoading}
            >
              {isLoading ? "Đang lưu..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );

}