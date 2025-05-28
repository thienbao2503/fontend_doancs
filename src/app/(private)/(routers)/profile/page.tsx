"use client"
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useAuthQuery } from "@/app/services/auth/useQuery";
import Tabs from "../Tabs";
import toast from "react-hot-toast";
import { setToken } from "@/app/utils/tokenServiceServerSide";

export default function profile() {
  const router = useRouter();
  const pathname = typeof window !== "undefined" ? window.location.pathname : "";
  const [activeTab, setActiveTab] = useState(pathname.includes("security") ? "security" : "profile");
  const { data, refetch } = useAuthQuery.useProfile();
  const { mutate: updateMutate, isPending } = useAuthQuery.useUpdateProfile(
    (res) => {
      refetch();
      toast.success(res.message);
    },
    (err) => {
      toast.error(err.errors[0].message);
    }
  );

  const { mutate: changePasswordMutate } = useAuthQuery.useUpdatePassword(
    async (res) => {
      toast.success(res.message);
      setPasswordForm({ old_password: "", new_password: "", confirm_password: "" }); // Reset form
      await setToken("", "");
    },
    (err) => {
      toast.error(err.errors[0].message);
    }
  );
  const [form, setForm] = useState({
    email: "",
    full_name: "",
    phone: "",
  });
  const [passwordForm, setPasswordForm] = useState({
    old_password: "",
    new_password: "",
    confirm_password: "",
  });

  useEffect(() => {
    if (data) {
      setForm({
        email: data.email || "",
        full_name: data.full_name || "",
        phone: data.phone || "",
      });
    }
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    updateMutate(form);
    // Có thể thêm thông báo thành công ở đây
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordForm(prev => ({ ...prev, [name]: value }));
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordForm.new_password !== passwordForm.confirm_password) {
      toast.error("Mật khẩu mới và xác nhận mật khẩu không khớp.");
      return;
    }
    // Call the mutation for changing the password
    // Assuming you have a useChangePassword hook

    changePasswordMutate(passwordForm);
  };



  return (
    <section className=" flex justify-center p-4 overflow-hidden">
      <div className="w-full max-w-md mx-auto">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === "profile" && <form
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
            <label htmlFor="full_name" className="block font-semibold mb-1 text-[#222]">Tên đăng nhập</label>
            <input
              id="full_name"
              name="full_name"
              type="text"
              value={form.full_name}
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

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#1976d2] px-4 py-2 rounded-md text-white text-xs font-medium"
              disabled={isPending}
            >
              {isPending ? "Đang cập nhật..." : "Cập nhật"}
            </button>
          </div>
        </form>}

        {activeTab === "security" && <form
          className="bg-white rounded-lg p-6 text-[#222] text-sm space-y-4 border border-[#e0e0e0] shadow"
          onSubmit={handlePasswordSubmit}
        >
          <h2 className="text-left font-bold text-base mb-2">Đổi mật khẩu</h2>
          <div>
            <label htmlFor="old_password" className="block font-semibold mb-1 text-[#222]">Mật khẩu cũ</label>
            <input
              id="old_password"
              name="old_password"
              type="password"
              value={passwordForm.old_password}
              onChange={handlePasswordChange}
              placeholder="Nhập mật khẩu cũ"
              className="w-full rounded-md bg-white border border-[#e0e0e0] text-[#222] text-xs px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#1976d2]"
            />
          </div>
          <div>
            <label htmlFor="new_password" className="block font-semibold mb-1 text-[#222]">Mật khẩu mới</label>
            <input
              id="new_password"
              name="new_password"
              type="password"
              value={passwordForm.new_password}
              onChange={handlePasswordChange}
              placeholder="Nhập mật khẩu mới"
              className="w-full rounded-md bg-white border border-[#e0e0e0] text-[#222] text-xs px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#1976d2]"
            />
          </div>
          <div>
            <label htmlFor="confirm_password" className="block font-semibold mb-1 text-[#222]">Xác nhận mật khẩu</label>
            <input
              id="confirm_password"
              name="confirm_password"
              type="password"
              value={passwordForm.confirm_password}
              onChange={handlePasswordChange}
              placeholder="Xác nhận mật khẩu"
              className="w-full rounded-md bg-white border border-[#e0e0e0] text-[#222] text-xs px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#1976d2]"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#1976d2] px-4 py-2 rounded-md text-white text-xs font-medium"
            >
              Cập nhật
            </button>
          </div>

        </form>}

      </div>
    </section>
  );

}