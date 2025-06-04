"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ClipboardIcon,
  ChatBubbleLeftRightIcon,
  CalendarIcon,
  ChevronDownIcon,
  EyeIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    fill="currentColor"
    viewBox="0 0 24 24"
    className={props.className}
    {...props}
  >
    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.594-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.087-.205-7.713-2.165-10.141-5.144-.422.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.376 4.604 3.415-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14.002-7.496 14.002-13.986 0-.21 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
  </svg>
);
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    fill="currentColor"
    viewBox="0 0 24 24"
    className={props.className}
    {...props}
  >
    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47s-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
  </svg>
);
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" className={props.className} {...props}>
    <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
  </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" className={props.className} {...props}>
    <path d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.117C19.425 3.5 12 3.5 12 3.5s-7.425 0-9.391.569A2.994 2.994 0 0 0 .502 6.186C0 8.153 0 12 0 12s0 3.847.502 5.814a2.994 2.994 0 0 0 2.107 2.117C4.575 20.5 12 20.5 12 20.5s7.425 0 9.391-.569a2.994 2.994 0 0 0 2.107-2.117C24 15.847 24 12 24 12s0-3.847-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" className={props.className} {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.976 1.246 2.243 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.976.975-2.243 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.976-1.246-2.243-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608C4.516 2.565 5.783 2.294 7.149 2.232 8.415 2.175 8.795 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.127 4.659.332 3.678 1.313c-.981.981-1.186 2.093-1.243 3.374C2.012 5.668 2 6.077 2 12c0 5.923.012 6.332.07 7.613.057 1.281.262 2.393 1.243 3.374.981.981 2.093 1.186 3.374 1.243C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.281-.057 2.393-.262 3.374-1.243.981-.981 1.186-2.093 1.243-3.374.058-1.281.07-1.69.07-7.613 0-5.923-.012-6.332-.07-7.613-.057-1.281-.262-2.393-1.243-3.374-.981-.981-2.093-1.186-3.374-1.243C15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
  </svg>
);
export default function Page() {

  return (
    <div className="bg-white min-h-screen flex flex-col font-sans">
      {/* Nội dung về chúng tôi */}

      <section className="bg-white text-[#0A142F]">
      </section>
      <main className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row md:items-start md:gap-16">
        <img
          alt="Công trường xây dựng với cần cẩu và tòa nhà đang xây dựng dưới bầu trời xanh có vài đám mây"
          className="w-full max-w-[400px] object-cover mb-10 md:mb-0"
          height="400"
          src="https://storage.googleapis.com/a1aa/image/c210cc9a-6b00-4f11-e2a0-68ffda6c0e7e.jpg"
          width="400"
        />
        <section className="max-w-xl">
          <p className="text-[#F9B233] font-semibold text-sm mb-2">
            Chào mừng đến với ELEVATE
          </p>
          <h2 className="text-3xl font-extrabold mb-6">
            Kinh Nghiệm
          </h2>
          <p className="text-sm text-[#4B5563] mb-6 leading-relaxed">
            Chúng tôi cung cấp các dịch vụ xây dựng chất lượng cao, đảm bảo đáp ứng mọi nhu cầu của khách hàng. Đội ngũ của chúng tôi luôn tận tâm mang đến những giải pháp tối ưu và bền vững.
          </p>
          <p className="text-sm text-[#4B5563] mb-8 leading-relaxed">
            Với hơn hai thập kỷ kinh nghiệm, chúng tôi tự hào đã hoàn thành nhiều dự án lớn nhỏ, từ xây dựng nhà ở đến các công trình thương mại. Chúng tôi cam kết mang lại chất lượng vượt trội và sự hài lòng tối đa cho khách hàng.
          </p>
          <button className="bg-[#F9B233] text-[#0A142F] font-semibold text-sm px-6 py-3 rounded-sm hover:bg-yellow-400 transition">
            Tìm Hiểu Thêm
          </button>
        </section>
      </main>
      {/* Liên hệ */}
      
<section className="bg-[#F9F9F9] ">
  <div className="border-t border-gray-300">
    <h2 className="text-center text-orange-600 font-semibold text-lg py-2 select-none">
      Đội Ngũ Nhân Sự
    </h2>
  </div>
  <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8">
    <img
      alt="Ảnh nhóm 1"
      className="w-full max-w-xs rounded-xl shadow-lg object-cover transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
      height="400"
      src="https://th.bing.com/th/id/OIG3.OAh0aK9SIZYf5CMFU5M_?cb=iwc2&w=1024&h=1024&rs=1&pid=ImgDetMain"
    />
    <img
      alt="Ảnh nhóm 2"
      className="w-full max-w-xs rounded-xl shadow-lg object-cover transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
      height="400"
      src="https://th.bing.com/th/id/OIG3._3h2gpTgSkR8w9QzN3sQ?cb=iwc2&w=1024&h=1024&rs=1&pid=ImgDetMain"
    />
    <img
      alt="Ảnh nhóm 3"
      className="w-full max-w-xs rounded-xl shadow-lg object-cover transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
      height="400"
      src="https://th.bing.com/th/id/OIG3.GwN_fU1nL_4tSqxkUheH?cb=iwc2&pid=ImgGn"
    />
  </div>
</section>


      {/* Câu Hỏi Thường Gặp */}
      <section className="w-full mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <p className="text-yellow-400 font-semibold text-sm">Câu Hỏi Thường Gặp</p>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-1">Bạn Có Thể Hỏi</h2>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-12 max-w-5xl mx-auto">
          <div className="flex-1 space-y-4">
            {[
              "Làm thế nào để liên hệ với đội ngũ Builderz?",
              "Các dịch vụ xây dựng của bạn bao gồm những gì?",
              "Thời gian hoàn thành một dự án là bao lâu?",
              "Bạn có cung cấp dịch vụ tư vấn thiết kế không?",
              "Chi phí xây dựng được tính như thế nào?"
            ].map((question, i) => (
              <button
                key={i}
                className="w-full border border-gray-200 px-6 py-4 flex justify-between items-center text-slate-900 text-base font-normal"
                type="button"
              >
                {question}
                <span className="text-2xl text-yellow-400">+</span>
              </button>
            ))}
          </div>
          <div className="hidden md:block border-l border-yellow-400"></div>
          <div className="flex-1 space-y-4 mt-6 md:mt-0">
            {[
              "Bạn có bảo hành cho các công trình không?",
              "Làm thế nào để nhận báo giá chi tiết?",
              "Bạn có làm việc với các dự án quốc tế không?",
              "Đội ngũ của bạn có bao nhiêu kinh nghiệm?",
              "Bạn có sử dụng vật liệu thân thiện với môi trường không?"
            ].map((question, i) => (
              <button
                key={i}
                className="w-full border border-gray-200 px-6 py-4 flex justify-between items-center text-slate-900 text-base font-normal"
                type="button"
              >
                {question}
                <span className="text-2xl text-yellow-400">+</span>
              </button>
            ))}
          </div>
        </div>
      </section>


      {/* footer */}
      
    </div>
  );
}