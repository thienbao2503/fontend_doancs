"use client"
import { CalendarIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
    const pathname = usePathname();
    return (
        <>
            <div className="bg-[#f9b707] text-black border border-black">
                <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center py-0">
                    <div className="flex items-center gap-4 text-sm px-6">
                        <CalendarIcon className="w-10 h-10 text-black" aria-hidden="true" />
                        <div>
                            <span className="font-semibold text-lg block" aria-label="Opening Hours">
                                Thời gian làm việc
                            </span>
                            <span className="block text-base font-normal mt-1">
                                Mon – Fri, 8:00 – 17:00
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm px-6">
                        <PhoneIcon className="w-10 h-10 text-black" aria-hidden="true" />
                        <div>
                            <span className="font-semibold text-lg block" aria-label="Contact Number">
                                Liên hệ
                            </span>
                            <span className="block text-base font-normal mt-1">+012 345 6789</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm px-6">
                        <EnvelopeIcon className="w-10 h-10 text-black" aria-hidden="true" />
                        <div>
                            <span className="font-semibold text-lg block" aria-label="Email Address">
                                Email
                            </span>
                            <span className="block text-base font-normal mt-1">info@example.com</span>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="sticky top-0 z-50 bg-[#001025] text-white shadow-md">
                <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-3">

                    <div className="text-4xl font-extrabold select-none tracking-tight">
                        <img src="/Image/dacs_01_tn.png" alt="Logo" className="h-20 w-30 object-contain" />
                    </div>

                    <ul className="flex flex-wrap justify-center md:justify-start gap-6 text-base font-semibold mt-3 md:mt-0">
                        <li>
                            <Link
                                className={`${pathname === "/" ? "text-[#f9b707]" : "hover:text-[#f9b707]"} transition`}
                                href="/"
                            >
                                Trang chủ
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`${pathname === "/about" ? "text-[#f9b707]" : "hover:text-[#f9b707]"} transition`}
                                href="#gioithieu"
                            >
                                Giới thiệu
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`${pathname === "/service" ? "text-[#f9b707]" : "hover:text-[#f9b707]"} transition`}
                                href="#dichvu"
                            >
                                Dịch vụ
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`${pathname === "/team" ? "text-[#f9b707]" : "hover:text-[#f9b707]"} transition`}
                                href="#nhansu"
                            >
                                Nhân sự
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`${pathname === "/contact" ? "text-[#f9b707]" : "hover:text-[#f9b707]"} transition`}
                                href="#diachi"
                            >
                                Địa chỉ
                            </Link>
                        </li>
                    </ul>

                    <Link className="mt-3 md:mt-0 border border-white text-white text-base font-semibold px-5 py-2 rounded hover:bg-[#f9b707] hover:border-[#f9b707] hover:text-black transition" href="/tong-quan">
                        Tổng quan
                    </Link>
                </div>
            </nav>
        </>
    );
}

export default Navbar;