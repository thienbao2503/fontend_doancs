"use client"
import { useAuthQuery } from "@/app/services/auth/useQuery";
import { setToken } from "@/app/utils/tokenServiceServerSide";
import { UserCircleIcon, ShoppingCartIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { Popconfirm } from "antd";
import { useRouter } from "next/navigation";

function HeaderCustom() {
  const router = useRouter();
  const { data } = useAuthQuery.useProfile()

  return (
    <nav className="flex items-center justify-between px-4 md:px-8 h-16 max-w-full">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/Image/dacs.png"
          alt="Logo"
          className="h-25 w-auto max-w-[180px] md:max-w-[200px] object-contain"
          style={{ minWidth: '140px' }}
        />
      </div>
      {/* Categories + Search */}
      <div className="flex-1 flex justify-end items-center gap-5">
        <h1>
          Hello, {data?.full_name || "người dùng!"}
        </h1>
        <div className="flex items-center gap-3 space-x-3 bg-white/80 rounded-full px-2 py-2 shadow-md">
          <button
            aria-label="User account"
            className="group p-2 m-0 rounded-full transition-all duration-200 hover:bg-gray-200 hover:shadow-lg hover:scale-110 focus:outline-none"
            onClick={() => router.push("/profile")}
          >
            <UserCircleIcon className="w-6 h-6" color="black" />
          </button>
          <Popconfirm
            title="Bạn có muốn đăng xuất không?"
            onConfirm={() => {
              setToken("", "");
            }}
            okText="Đồng ý"
            cancelText="Hủy bỏ"
          >
            <button
              aria-label="Logout"
              className="group p-2 m-0 rounded-full transition-all duration-200 hover:bg-red-100 hover:shadow-lg hover:scale-110 focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-6 h-6 group-hover:stroke-red-500 transition-colors duration-200">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 15l3-3m0 0l-3-3m3 3H9" />
              </svg>
            </button>
          </Popconfirm>
          <button aria-label="Menu" className="group md:hidden p-2 rounded-full transition-all duration-200 hover:bg-gray-200 hover:shadow-lg hover:scale-110 focus:outline-none">
            <Bars3Icon className="w-6 h-6" color="black" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default HeaderCustom;