import { CalendarIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function Navbar() {
    return (
        <>
            <div className="bg-[#f9b707] text-black border border-black">
                <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center py-0">
                    <div className="flex items-center gap-4 text-sm px-6">
                        <CalendarIcon className="w-10 h-10 text-black" aria-hidden="true" />
                        <div>
                            <span className="font-semibold text-lg block" aria-label="Opening Hours">
                                Opening Hour
                            </span>
                            <span className="block text-base font-normal mt-1">
                                Mon – Fri, 8:00 – 9:00
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm px-6">
                        <PhoneIcon className="w-10 h-10 text-black" aria-hidden="true" />
                        <div>
                            <span className="font-semibold text-lg block" aria-label="Contact Number">
                                Call Us
                            </span>
                            <span className="block text-base font-normal mt-1">+012 345 6789</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm px-6">
                        <EnvelopeIcon className="w-10 h-10 text-black" aria-hidden="true" />
                        <div>
                            <span className="font-semibold text-lg block" aria-label="Email Address">
                                Email Us
                            </span>
                            <span className="block text-base font-normal mt-1">info@example.com</span>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="sticky top-0 z-50 bg-[#001025] text-white shadow-md">
                <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-3">
                    <div className="text-4xl font-extrabold select-none tracking-tight">
                        Builderz
                    </div>

                    <ul className="flex flex-wrap justify-center md:justify-start gap-6 text-base font-semibold mt-3 md:mt-0">
                        <li>
                            <Link className="text-[#f9b707] hover:text-[#f9b707] transition" href="/">HOME</Link>
                        </li>
                        <li>
                            <Link className="hover:text-[#f9b707] transition" href="/about">
                                ABOUT
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-[#f9b707] transition" href="/service">SERVICE</Link>
                        </li>
                        <li>
                            <Link className="hover:text-[#f9b707] transition" href="/team">TEAM</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-[#f9b707] transition">
                                CONTACT
                            </Link>
                        </li>
                    </ul>

                    <a className="mt-3 md:mt-0 border border-white text-white text-base font-semibold px-5 py-2 rounded hover:bg-[#f9b707] hover:border-[#f9b707] hover:text-black transition" href="#">
                        Get A Quote
                    </a>
                </div>
            </nav>
        </>
    );
}

export default Navbar;