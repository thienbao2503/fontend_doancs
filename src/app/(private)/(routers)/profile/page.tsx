"use client"
import { useRouter } from "next/navigation";
export default function profile() {

const router = useRouter();
  return (
    <section className="bg-white min-h-screen flex items-center justify-center p-4">
    
      <div className="w-full max-w-3xl mt-[-48px]">
        <div className="flex space-x-2 mb-6 justify-center">
          <button
            className="flex items-center space-x-1 bg-[#f5f5f5] rounded-md px-4 py-2 text-[#222] text-sm font-medium border border-[#e0e0e0]"
            type="button"
            onClick={() => router.push("/profile")}
          >
            <i className="fas fa-user"></i>
            <span>Account</span>
          </button>
          <button
            className="flex items-center space-x-1 bg-[#f5f5f5] rounded-md px-4 py-2 text-[#222] text-sm font-medium border border-[#e0e0e0]"
            type="button"
            onClick={() => router.push("/security")}
          >
            <i className="fas fa-lock"></i>
            <span>Security</span>
          </button>
        </div>
        <form
          className="bg-white rounded-lg p-6 text-[#222] text-sm space-y-4 border border-[#e0e0e0] shadow"
          autoComplete="off"
        >
          <h2 className="text-left font-bold text-base mb-2">Cập nhật thông tin</h2>
          <div>
            <label htmlFor="email" className="block font-semibold mb-1 text-[#222]">Email</label>
            <input
              id="email"
              type="email"
              className="w-full rounded-md bg-white border border-[#e0e0e0] text-[#222] text-xs px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#1976d2]"
            />
          </div>
          <div>
            <label htmlFor="name" className="block font-semibold mb-1 text-[#222]">Tên đăng nhập</label>
            <input
              id="name"
              type="text"
              className="w-full rounded-md bg-white border border-[#e0e0e0] text-[#222] text-xs px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#1976d2]"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block font-semibold mb-1 text-[#222]">Số điện thoại</label>
            <input
              id="phone"
              type="tel"
              placeholder="Enter Your Phone"
              className="w-full rounded-md bg-white border border-[#e0e0e0] text-[#222] text-xs px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#1976d2]"
            />
          </div>
          <div>
            <label htmlFor="gender" className="block font-semibold mb-1 text-[#222]">Giới tính</label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-1">
                <input type="radio" name="gender" className="accent-[#1976d2]" />
                <span>Nam</span>
              </label>
              <label className="flex items-center space-x-1">
                <input type="radio" name="gender" className="accent-[#1976d2]" />
                <span>Nữ</span>
              </label>
              <label className="flex items-center space-x-1">
                <input type="radio" name="gender" className="accent-[#1976d2]" />
                <span>Khác</span>
              </label>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#1976d2] px-4 py-2 rounded-md text-white text-xs font-medium"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}