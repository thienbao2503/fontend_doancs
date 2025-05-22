"use client"
import { UserCircleIcon, ShoppingCartIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

function HeaderCustom() {
  const router = useRouter();
  return (
    <nav className="flex items-center justify-between px-4 md:px-8 h-16 max-w-full bg-[#1B2A4A]">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img
          alt="Turitor logo with a graduation cap icon in turquoise and text 'turitor' in white"
          className="w-8 h-8"
          height="32"
          src="https://storage.googleapis.com/a1aa/image/5e1b5067-0e27-497e-70d1-e21740922e99.jpg"
          width="32"
        />
        <span className="text-white font-extrabold text-xl select-none">
          turitor
        </span>
      </div>
      {/* Categories + Search */}
      <div className="hidden md:flex items-center space-x-3 bg-[#27385F] rounded-md px-2 py-1">
        <button
          aria-label="Categories"
          className="flex items-center space-x-1 text-xs font-semibold text-white uppercase tracking-wide px-3 py-2 bg-[#27385F] rounded-md hover:bg-[#2f437f] transition"
        >
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 20 20">
            <rect x="3" y="3" width="5" height="5" />
            <rect x="12" y="3" width="5" height="5" />
            <rect x="3" y="12" width="5" height="5" />
            <rect x="12" y="12" width="5" height="5" />
          </svg>
          <span>CATEGORIES</span>
        </button>
        <div className="relative">
          <input
            aria-label="Search"
            className="bg-[#27385F] text-white placeholder-white/70 rounded-md pl-3 pr-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00C2A0]"
            placeholder="Search"
            type="search"
          />
          <svg
            aria-hidden="true"
            className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-white pointer-events-none"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
      </div>
      {/* Nav links + icons */}
      <div className="flex items-center space-x-4 text-white text-xs font-semibold tracking-wide uppercase select-none">
        <button
          aria-label="User account"
          className="hover:text-[#00C2A0]"
          onClick={() => router.push("/profile")}
        >
          <UserCircleIcon className="w-6 h-6" />
        </button>
       
        <button aria-label="Menu" className="md:hidden hover:text-[#00C2A0]">
          <Bars3Icon className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}

export default HeaderCustom;