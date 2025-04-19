import React from "react";
import Image from "next/image";
import Calendar from "./Calendar";

export default function About() {
  return (
   // header
   <div className="flex justify-center bg-[#F9FAFF] font-sans text-[#1E1E50] min-h-screen">
   <div className="w-full max-w-[1200px] mx-auto p-6 md:p-8">
     <div className="space-y-8">
       {/* Top cards container */}
       <div className="flex space-x-4 pb-4">
         {/* Card 1 Investment */}
         <div className="min-w-[280px] max-w-[280px] bg-white rounded-xl p-6 shadow-sm flex-shrink-0">
           <div className="flex justify-between items-start">
             <p className="text-sm text-[#1E1E50] font-normal">Vốn đầu tư</p>
             <span className="bg-[#4F6FFF] text-white text-[10px] font-semibold px-2 py-[2px] rounded-md">
               Hàng tháng
             </span>
           </div>
           <p className="text-2xl font-bold mt-2">$35000</p>
           <p className="text-xs text-[#1E1E50] opacity-60 mt-1">Tổng doanh thu</p>
           <div className="mt-4 flex items-center space-x-2">
             <div className="w-full h-1.5 rounded-full bg-[#E6E9FF]">
               <div className="h-1.5 rounded-full bg-[#4F6FFF] w-[65%]"></div>
             </div>
             <span className="text-xs text-[#4F6FFF] font-semibold">65%</span>
           </div>
         </div>
         {/* Card 2 Sales */}
         <div className="min-w-[280px] max-w-[280px] bg-white rounded-xl p-6 shadow-sm flex-shrink-0">
           <div className="flex justify-between items-start">
             <p className="text-sm text-[#1E1E50] font-normal">Sales</p>
             <span className="bg-[#F5B800] text-white text-[10px] font-semibold px-2 py-[2px] rounded-md">
             Hàng năm
             </span>
           </div>
           <p className="text-2xl font-bold mt-2">$25100</p>
           <p className="text-xs text-[#1E1E50] opacity-60 mt-1">
           Tổng doanh thu</p>
           <div className="mt-4 flex items-center space-x-2">
             <div className="w-full h-1.5 rounded-full bg-[#FFF6D6]">
               <div className="h-1.5 rounded-full bg-[#F5B800] w-[35%]"></div>
             </div>
             <span className="text-xs text-[#F5B800] font-semibold">35%</span>
           </div>
         </div>
         {/* Card 3 Cost */}
         <div className="min-w-[280px] max-w-[280px] bg-white rounded-xl p-6 shadow-sm flex-shrink-0">
           <div className="flex justify-between items-start">
             <p className="text-sm text-[#1E1E50] font-normal">Cost</p>
             <span className="bg-[#3AC2B9] text-white text-[10px] font-semibold px-2 py-[2px] rounded-md">
               Today
             </span>
           </div>
           <p className="text-2xl font-bold mt-2">$33000</p>
           <p className="text-xs text-[#1E1E50] opacity-60 mt-1">Total Revenue</p>
           <div className="mt-4 flex items-center space-x-2">
             <div className="w-full h-1.5 rounded-full bg-[#D6F3F1]">
               <div className="h-1.5 rounded-full bg-[#3AC2B9] w-[85%]"></div>
             </div>
             <span className="text-xs text-[#3AC2B9] font-semibold">85%</span>
           </div>
         </div>
         {/* Card 4 Profit */}
         <div className="min-w-[280px] max-w-[280px] bg-white rounded-xl p-6 shadow-sm flex-shrink-0">
           <div className="flex justify-between items-start">
             <p className="text-sm text-[#1E1E50] font-normal">Profit</p>
             <span className="bg-[#4F9FFF] text-white text-[10px] font-semibold px-2 py-[2px] rounded-md">
               Weekly
             </span>
           </div>
           <p className="text-2xl font-bold mt-2">$2500</p>
           <p className="text-xs text-[#1E1E50] opacity-60 mt-1">Total Revenue</p>
           <div className="mt-4 flex items-center space-x-2">
             <div className="w-full h-1.5 rounded-full bg-[#D6E6FF]">
               <div className="h-1.5 rounded-full bg-[#4F9FFF] w-[55%]"></div>
             </div>
             <span className="text-xs text-[#4F9FFF] font-semibold">55%</span>
           </div>
         </div>



         {/* main */}
       </div>
          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left column - Overview Progress */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-lg font-semibold mb-6">Overview Progress</h2>
                <div className="space-y-6">
                  {/* UX / UI Design */}
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-[#1E1E50] opacity-70 w-24">UX / UI Design</p>
                    <div className="flex-1 mx-4 flex items-center space-x-2">
                      <div className="w-full h-2 rounded-full bg-[#F7D6CA]">
                        <div className="h-2 rounded-full bg-[#F15A24] w-[65%]"></div>
                      </div>
                      <span className="text-xs text-[#1E1E50] opacity-70 font-semibold w-8 text-right">
                        65%
                      </span>
                    </div>
                    <div className="flex space-x-[-10px]">
                      <Image
                        alt="Face of a woman with light skin and brown hair smiling"
                        className="w-8 h-8 rounded-full border-2 border-white"
                        src="https://storage.googleapis.com/a1aa/image/221ceadf-0e65-4748-1f74-25490c40de02.jpg"
                        width={32}
                        height={32}
                      />
                      <Image
                        alt="Face of a woman with light skin and blonde hair smiling"
                        className="w-8 h-8 rounded-full border-2 border-white"
                        src="https://storage.googleapis.com/a1aa/image/9a95ce04-3a65-4514-c5fe-0cfb510869d4.jpg"
                        width={32}
                        height={32}
                      />
                      <Image
                        alt="Face of a man with light skin and brown hair smiling"
                        className="w-8 h-8 rounded-full border-2 border-white"
                        src="https://storage.googleapis.com/a1aa/image/52d2b401-bd68-4848-3ded-15de84c8bfe0.jpg"
                        width={32}
                        height={32}
                      />
                    </div>
                  </div>
                  {/* Development */}
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-[#1E1E50] opacity-70 w-24">Development</p>
                    <div className="flex-1 mx-4 flex items-center space-x-2">
                      <div className="w-full h-2 rounded-full bg-[#D6D9FF]">
                        <div className="h-2 rounded-full bg-[#4F6FFF] w-[59%]"></div>
                      </div>
                      <span className="text-xs text-[#1E1E50] opacity-70 font-semibold w-8 text-right">
                        59%
                      </span>
                    </div>
                    <div className="flex space-x-[-10px]">
                      <Image
                        alt="Face of a man with light skin and beard smiling"
                        className="w-8 h-8 rounded-full border-2 border-white"
                        src="https://storage.googleapis.com/a1aa/image/95e15d84-bc2b-4a4f-2489-dbc3e0c738ab.jpg"
                        width={32}
                        height={32}
                      />
                      <Image
                        alt="Face of a woman with light skin and short hair smiling"
                        className="w-8 h-8 rounded-full border-2 border-white"
                        src="https://storage.googleapis.com/a1aa/image/032067c4-d752-49fd-7282-ce34b6cb96d1.jpg"
                        width={32}
                        height={32}
                      />
                      <Image
                        alt="Face of a man with light skin and hat smiling"
                        className="w-8 h-8 rounded-full border-2 border-white"
                        src="https://storage.googleapis.com/a1aa/image/1618a9ce-a147-45c8-6d65-37f29a5946fb.jpg"
                        width={32}
                        height={32}
                      />
                    </div>
                  </div>
                  {/* Testing */}
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-[#1E1E50] opacity-70 w-24">Testing</p>
                    <div className="flex-1 mx-4 flex items-center space-x-2">
                      <div className="w-full h-2 rounded-full bg-[#FFF6D6]">
                        <div className="h-2 rounded-full bg-[#F5B800] w-[78%]"></div>
                      </div>
                      <span className="text-xs text-[#1E1E50] opacity-70 font-semibold w-8 text-right">
                        78%
                      </span>
                    </div>
                    <div className="flex space-x-[-10px]">
                      <Image
                        alt="Face of a man with light skin and beard smiling"
                        className="w-8 h-8 rounded-full border-2 border-white"
                        src="https://storage.googleapis.com/a1aa/image/95e15d84-bc2b-4a4f-2489-dbc3e0c738ab.jpg"
                        width={32}
                        height={32}
                      />
                      <Image
                        alt="Face of a woman with light skin and brown hair smiling"
                        className="w-8 h-8 rounded-full border-2 border-white"
                        src="https://storage.googleapis.com/a1aa/image/221ceadf-0e65-4748-1f74-25490c40de02.jpg"
                        width={32}
                        height={32}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Progress Items */}
              <div className="space-y-6">
                {/* Item 1 Cloud Service Theme */}
                <div className="bg-white rounded-xl p-6 shadow-sm flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <div className="relative w-16 h-16">
                      <svg className="absolute top-0 left-0 w-16 h-16" fill="none" viewBox="0 0 64 64">
                        <circle cx="32" cy="32" r="30" stroke="#D6E6FF" strokeWidth="4"></circle>
                      </svg>
                      <svg className="absolute top-0 left-0 w-16 h-16" fill="none" viewBox="0 0 64 64">
                        <path
                          d="M32 2a30 30 0 0 1 0 60"
                          stroke="#4F6FFF"
                          strokeDasharray="47.1"
                          strokeDashoffset="35.3"
                          strokeLinecap="round"
                          strokeWidth="4"
                        ></path>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center text-[#4F6FFF] font-semibold text-sm" style={{ lineHeight: 1 }}>
                        25%
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-[#1E1E50]">Cloud Service Theme</p>
                      <p className="text-xs text-[#1E1E50] opacity-60 mt-1 max-w-xs">
                        Exclusively for cloud-based/ Startup theme.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="flex space-x-[-10px]">
                      <Image
                        alt="Face of a woman with light skin and blonde hair smiling"
                        className="w-8 h-8 rounded-full border-2 border-white"
                        src="https://storage.googleapis.com/a1aa/image/9a95ce04-3a65-4514-c5fe-0cfb510869d4.jpg"
                        width={32}
                        height={32}
                      />
                      <Image
                        alt="Face of a woman with light skin and black hair smiling"
                        className="w-8 h-8 rounded-full border-2 border-white"
                        src="https://storage.googleapis.com/a1aa/image/9cd3de08-429e-4a8c-ebb7-f522f7cd0f42.jpg"
                        width={32}
                        height={32}
                      />
                    </div>
                    <span className="text-[#4F6FFF] text-xs font-semibold bg-[#E6E9FF] px-3 py-1 rounded-md">High</span>
                  </div>
                </div>
                {/* Item 2 Automotive WordPress */}
                <div className="bg-white rounded-xl p-6 shadow-sm flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <div className="relative w-16 h-16">
                      <svg className="absolute top-0 left-0 w-16 h-16" fill="none" viewBox="0 0 64 64">
                        <circle cx="32" cy="32" r="30" stroke="#FAD9CC" strokeWidth="4"></circle>
                      </svg>
                      <svg className="absolute top-0 left-0 w-16 h-16" fill="none" viewBox="0 0 64 64">
                        <path
                          d="M32 2a30 30 0 0 1 0 60"
                          stroke="#F15A24"
                          strokeDasharray="47.1"
                          strokeDashoffset="33"
                          strokeLinecap="round"
                          strokeWidth="4"
                        ></path>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center text-[#F15A24] font-semibold text-sm" style={{ lineHeight: 1 }}>
                        30%
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-[#1E1E50]">Automotive WordPress</p>
                      <p className="text-xs text-[#1E1E50] opacity-60 mt-1 max-w-xs">
                        Dealership-based business WordPress theme.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="flex space-x-[-10px]">
                      <Image
                        alt="Face of a man with light skin and beard smiling"
                        className="w-8 h-8 rounded-full border-2 border-white"
                        src="https://storage.googleapis.com/a1aa/image/95e15d84-bc2b-4a4f-2489-dbc3e0c738ab.jpg"
                        width={32}
                        height={32}
                      />
                      <Image
                        alt="Face of a woman with light skin and brown hair smiling"
                        className="w-8 h-8 rounded-full border-2 border-white"
                        src="https://storage.googleapis.com/a1aa/image/221ceadf-0e65-4748-1f74-25490c40de02.jpg"
                        width={32}
                        height={32}
                      />
                      <Image
                        alt="Face of a man with light skin and hat smiling"
                        className="w-8 h-8 rounded-full border-2 border-white"
                        src="https://storage.googleapis.com/a1aa/image/1618a9ce-a147-45c8-6d65-37f29a5946fb.jpg"
                        width={32}
                        height={32}
                      />
                      <Image
                        alt="Face of a man with light skin and beard smiling"
                        className="w-8 h-8 rounded-full border-2 border-white"
                        src="https://storage.googleapis.com/a1aa/image/95e15d84-bc2b-4a4f-2489-dbc3e0c738ab.jpg"
                        width={32}
                        height={32}
                      />
                    </div>
                    <span className="text-[#F15A24] text-xs font-semibold bg-[#FAD9CC] px-3 py-1 rounded-md">Medium</span>
                  </div>
                </div>
                {/* Item 3 Online Education */}
                <div className="bg-white rounded-xl p-6 shadow-sm flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <div className="relative w-16 h-16">
                      <svg className="absolute top-0 left-0 w-16 h-16" fill="none" viewBox="0 0 64 64">
                        <circle cx="32" cy="32" r="30" stroke="#FFF6D6" strokeWidth="4"></circle>
                      </svg>
                      <svg className="absolute top-0 left-0 w-16 h-16" fill="none" viewBox="0 0 64 64">
                        <path
                          d="M32 2a30 30 0 0 1 0 60"
                          stroke="#F5B800"
                          strokeDasharray="47.1"
                          strokeDashoffset="40"
                          strokeLinecap="round"
                          strokeWidth="4"
                        ></path>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center text-[#F5B800] font-semibold text-sm" style={{ lineHeight: 1 }}>
                        15%
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-[#1E1E50]">Online Education</p>
                      <p className="text-xs text-[#1E1E50] opacity-60 mt-1 max-w-xs">
                        Remote students and teachers dashboard.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="flex space-x-[-10px]">
                      <Image
                        alt="Face of a man with light skin and beard smiling"
                        className="w-8 h-8 rounded-full border-2 border-white"
                        src="https://storage.googleapis.com/a1aa/image/95e15d84-bc2b-4a4f-2489-dbc3e0c738ab.jpg"
                        width={32}
                        height={32}
                      />
                      <Image
                        alt="Face of a woman with light skin and brown hair smiling"
                        className="w-8 h-8 rounded-full border-2 border-white"
                        src="https://storage.googleapis.com/a1aa/image/221ceadf-0e65-4748-1f74-25490c40de02.jpg"
                        width={32}
                        height={32}
                      />
                    </div>
                    <span className="text-[#F5B800] text-xs font-semibold bg-[#FFF6D6] px-3 py-1 rounded-md">Low</span>
                  </div>
                </div>
                {/* Item 4 Online Education */}
                <div className="bg-white rounded-xl p-6 shadow-sm flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <div className="relative w-16 h-16">
                      <svg className="absolute top-0 left-0 w-16 h-16" fill="none" viewBox="0 0 64 64">
                        <circle cx="32" cy="32" r="30" stroke="#FFF6D6" strokeWidth="4"></circle>
                      </svg>
                      <svg className="absolute top-0 left-0 w-16 h-16" fill="none" viewBox="0 0 64 64">
                        <path
                          d="M32 2a30 30 0 0 1 0 60"
                          stroke="#F5B800"
                          strokeDasharray="47.1"
                          strokeDashoffset="40"
                          strokeLinecap="round"
                          strokeWidth="4"
                        ></path>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center text-[#F5B800] font-semibold text-sm" style={{ lineHeight: 1 }}>
                        40%
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-[#1E1E50]">Online Education</p>
                      <p className="text-xs text-[#1E1E50] opacity-60 mt-1 max-w-xs">
                        Remote students and teachers dashboard.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="flex space-x-[-10px]">
                      <Image
                        alt="Face of a man with light skin and beard smiling"
                        className="w-8 h-8 rounded-full border-2 border-white"
                        src="https://storage.googleapis.com/a1aa/image/95e15d84-bc2b-4a4f-2489-dbc3e0c738ab.jpg"
                        width={32}
                        height={32}
                      />
                      <Image
                        alt="Face of a woman with light skin and brown hair smiling"
                        className="w-8 h-8 rounded-full border-2 border-white"
                        src="https://storage.googleapis.com/a1aa/image/221ceadf-0e65-4748-1f74-25490c40de02.jpg"
                        width={32}
                        height={32}
                      />
                    </div>
                    <span className="text-[#F5B800] text-xs font-semibold bg-[#FFF6D6] px-3 py-1 rounded-md">Low</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Right column - Calendar and Tasks */}
            <div className="space-y-8">
              <Calendar />
              {/* Tasks list */}
              <div className="space-y-4 max-w-[320px] mx-auto lg:mx-0">
                {/* Task 1 */}
                <div className="bg-white rounded-xl p-4 shadow-sm flex items-center space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#F15A24"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold text-sm text-[#1E1E50]">Direct Development</p>
                    <p className="text-xs text-[#1E1E50] opacity-60 mt-1">Unveiling the design system</p>
                  </div>
                </div>
                {/* Task 2 */}
                <div className="bg-white rounded-xl p-4 shadow-sm flex items-center space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#4F6FFF"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold text-sm text-[#1E1E50]">Action point assigned</p>
                    <p className="text-xs text-[#1E1E50] opacity-60 mt-1">Unveiling the design system</p>
                  </div>
                </div>
                {/* Task 3 */}
                <div className="bg-white rounded-xl p-4 shadow-sm flex items-center space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#F5B800"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold text-sm text-[#1E1E50]">Private Notes</p>
                    <p className="text-xs text-[#1E1E50] opacity-60 mt-1">Unveiling the design system</p>
                  </div>
                </div>
                {/* Task 4 */}
                <div className="bg-white rounded-xl p-4 shadow-sm flex items-center space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#4CB6A5"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold text-sm text-[#1E1E50]">Support Request</p>
                    <p className="text-xs text-[#1E1E50] opacity-60 mt-1">Unveiling the design system</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* footer */}
          {/* Current Projects Section */}
          <h2 className="text-3xl font-semibold text-[#1E1E50] mb-6">Current Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-[#1E1E50] mb-3">Hotel Management App UI Kit</h3>
              <div className="flex items-center text-xs text-[#1E1E50] opacity-60 mb-4 space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                  />
                </svg>
                <span>02 / 02 / 2021</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-[#FAD9CC] mb-5">
                <div className="h-1.5 rounded-full bg-[#F15A24] w-[70%]"></div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  <Image
                    alt="Man with beard and short hair"
                    className="w-8 h-8 rounded-full border-2 border-white"
                    src="https://storage.googleapis.com/a1aa/image/8cbe9ee3-7733-4126-824d-20c24bd08fdf.jpg"
                    width={32}
                    height={32}
                  />
                  <Image
                    alt="Woman with brown hair and red lipstick"
                    className="w-8 h-8 rounded-full border-2 border-white"
                    src="https://storage.googleapis.com/a1aa/image/211ca014-7ac2-4e77-60b7-600c5aa3b567.jpg"
                    width={32}
                    height={32}
                  />
                  <Image
                    alt="Woman with brown hair and bangs"
                    className="w-8 h-8 rounded-full border-2 border-white"
                    src="https://storage.googleapis.com/a1aa/image/adc3b9fd-a303-44aa-7b29-42e19183510e.jpg"
                    width={32}
                    height={32}
                  />
                  <Image
                    alt="Man with mustache and hat"
                    className="w-8 h-8 rounded-full border-2 border-white"
                    src="https://storage.googleapis.com/a1aa/image/79d70e7f-cef4-499c-e9d9-81b11fe63cef.jpg"
                    width={32}
                    height={32}
                  />
                </div>
                <span className="text-xs font-semibold bg-[#FAD9CC] text-[#F15A24] rounded-md px-3 py-1">Design</span>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-[#1E1E50] mb-3">General Improvement in pages</h3>
              <div className="flex items-center text-xs text-[#1E1E50] opacity-60 mb-4 space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                  />
                </svg>
                <span>02 / 02 / 2021</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-[#D6E6FF] mb-5">
                <div className="h-1.5 rounded-full bg-[#4F6FFF] w-[60%]"></div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  <Image
                    alt="Woman with brown hair and red lipstick"
                    className="w-8 h-8 rounded-full border-2 border-white"
                    src="https://storage.googleapis.com/a1aa/image/211ca014-7ac2-4e77-60b7-600c5aa3b567.jpg"
                    width={32}
                    height={32}
                  />
                  <Image
                    alt="Man with short hair and beard"
                    className="w-8 h-8 rounded-full border-2 border-white"
                    src="https://storage.googleapis.com/a1aa/image/357ec3db-dc86-497c-f39c-ed0146df71b7.jpg"
                    width={32}
                    height={32}
                  />
                  <Image
                    alt="Man with beard and short hair"
                    className="w-8 h-8 rounded-full border-2 border-white"
                    src="https://storage.googleapis.com/a1aa/image/8cbe9ee3-7733-4126-824d-20c24bd08fdf.jpg"
                    width={32}
                    height={32}
                  />
                  <Image
                    alt="Man with beard and short hair"
                    className="w-8 h-8 rounded-full border-2 border-white"
                    src="https://storage.googleapis.com/a1aa/image/8cbe9ee3-7733-4126-824d-20c24bd08fdf.jpg"
                    width={32}
                    height={32}
                  />
                </div>
                <span className="text-xs font-semibold bg-[#D6E6FF] text-[#4F6FFF] rounded-md px-3 py-1">Testing</span>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-[#1E1E50] mb-3">Product list view changes</h3>
              <div className="flex items-center text-xs text-[#1E1E50] opacity-60 mb-4 space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                  />
                </svg>
                <span>02 / 02 / 2021</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-[#D6F3F1] mb-5">
                <div className="h-1.5 rounded-full bg-[#3AC2B9] w-[55%]"></div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  <Image
                    alt="Woman with brown hair and red lipstick"
                    className="w-8 h-8 rounded-full border-2 border-white"
                    src="https://storage.googleapis.com/a1aa/image/211ca014-7ac2-4e77-60b7-600c5aa3b567.jpg"
                    width={32}
                    height={32}
                  />
                  <Image
                    alt="Man with short hair and beard"
                    className="w-8 h-8 rounded-full border-2 border-white"
                    src="https://storage.googleapis.com/a1aa/image/357ec3db-dc86-497c-f39c-ed0146df71b7.jpg"
                    width={32}
                    height={32}
                  />
                  <Image
                    alt="Woman with brown hair and bangs"
                    className="w-8 h-8 rounded-full border-2 border-white"
                    src="https://storage.googleapis.com/a1aa/image/adc3b9fd-a303-44aa-7b29-42e19183510e.jpg"
                    width={32}
                    height={32}
                  />
                  <Image
                    alt="Woman with short black hair"
                    className="w-8 h-8 rounded-full border-2 border-white"
                    src="https://storage.googleapis.com/a1aa/image/dab4df30-f8f2-4778-d522-9b18ec083d5e.jpg"
                    width={32}
                    height={32}
                  />
                </div>
                <span className="text-xs font-semibold bg-[#D6F3F1] text-[#3AC2B9] rounded-md px-3 py-1">SEO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}