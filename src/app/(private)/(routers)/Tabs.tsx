"use client"
import { useRouter, usePathname } from "next/navigation";

export default function Tabs() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="flex space-x-2 mb-6 justify-center transition-all duration-300">
      <button
        className={`flex items-center space-x-1 rounded-md px-4 py-2 text-sm font-medium border transition-all duration-300 ${pathname.includes("profile") ? "bg-[#1976d2] text-white border-[#1976d2]" : "bg-[#f5f5f5] text-[#222] border-[#e0e0e0]"}`}
        type="button"
        onClick={() => router.push("/profile")}
      >
        <i className="fas fa-user"></i>
        <span>Account</span>
      </button>
      <button
        className={`flex items-center space-x-1 rounded-md px-4 py-2 text-sm font-medium border transition-all duration-300 ${pathname.includes("security") ? "bg-[#1976d2] text-white border-[#1976d2]" : "bg-[#f5f5f5] text-[#222] border-[#e0e0e0]"}`}
        type="button"
        onClick={() => router.push("/security")}
      >
        <i className="fas fa-lock"></i>
        <span>Security</span>
      </button>
    </div>
  );
}