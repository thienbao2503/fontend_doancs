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
    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47s-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/>
  </svg>
);
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" className={props.className} {...props}>
    <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/>
  </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" className={props.className} {...props}>
    <path d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.117C19.425 3.5 12 3.5 12 3.5s-7.425 0-9.391.569A2.994 2.994 0 0 0 .502 6.186C0 8.153 0 12 0 12s0 3.847.502 5.814a2.994 2.994 0 0 0 2.107 2.117C4.575 20.5 12 20.5 12 20.5s7.425 0 9.391-.569a2.994 2.994 0 0 0 2.107-2.117C24 15.847 24 12 24 12s0-3.847-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" className={props.className} {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.976 1.246 2.243 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.976.975-2.243 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.976-1.246-2.243-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608C4.516 2.565 5.783 2.294 7.149 2.232 8.415 2.175 8.795 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.127 4.659.332 3.678 1.313c-.981.981-1.186 2.093-1.243 3.374C2.012 5.668 2 6.077 2 12c0 5.923.012 6.332.07 7.613.057 1.281.262 2.393 1.243 3.374.981.981 2.093 1.186 3.374 1.243C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.281-.057 2.393-.262 3.374-1.243.981-.981 1.186-2.093 1.243-3.374.058-1.281.07-1.69.07-7.613 0-5.923-.012-6.332-.07-7.613-.057-1.281-.262-2.393-1.243-3.374-.981-.981-2.093-1.186-3.374-1.243C15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
  </svg>
);
export default function Page() {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-white min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-2 py-2">
        <h1 className="text-center text-orange-600 font-semibold text-2xl md:text-3xl">
          Thông Tin Liên Hệ
        </h1>
        <div className="border-t-2 border-orange-300 w-16 mx-auto mt-2 mb-8"></div>
        <div className="flex flex-col md:flex-row md:space-x-10">
        <div className="mb-6 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.427745807821!2d106.78212887465665!3d10.855034789298571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527006db97ff1%3A0x8ed7036831a229d3!2sHUTECH%20E%202!5e0!3m2!1svi!2s!4v1748097072321!5m2!1svi!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        </div>
      </div>


      <div className="px-4 md:px-12 lg:px-32">
        <h2 className="text-[#f4511e] font-bold text-lg mb-2">Gửi yêu cầu tư vấn miễn phí</h2>
        <p className="mb-4 text-base font-normal">
          Quý khách hàng hãy nhập thông tin bên dưới và gửi cho chúng tôi, Kiến Trúc Sư của Quốc Bảo sẽ phản hồi quý khách sớm nhất. Rất vui lòng khi nhận được ý kiến của quý khách!
        </p>
        <form className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex flex-col gap-3 flex-1">
            <input type="text" placeholder="Họ và tên*..." className="border border-gray-300 p-3 text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f4511e] w-full" />
            <input type="text" placeholder="Số điện thoại*..." className="border border-gray-300 p-3 text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f4511e] w-full" />
            <input type="text" placeholder="Địa chỉ của bạn..." className="border border-gray-300 p-3 text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f4511e] w-full" />
          </div>
          <textarea placeholder="Nội dung yêu cầu tư vấn..." className="border border-gray-300 p-3 text-base placeholder:text-gray-400 flex-1 resize-y min-h-[120px] focus:outline-none focus:ring-2 focus:ring-[#f4511e] w-full"></textarea>
        </form>
        <p className="text-[#f00] font-semibold mb-1">Lưu ý:</p>
        <p className="mb-6">
          Thông tin quý khách cung cấp càng đầy đủ thì chúng tôi càng có cơ sở để đưa ra phương án tối ưu hơn. Ví dụ: Xây nhà ở đâu? Diện tích đất bao nhiêu? Xây bao nhiêu tầng, công năng sử dụng các phòng thế nào?
        </p>
        <button className="bg-[#f4511e] text-white font-bold uppercase px-6 py-2 w-full md:w-auto">GỬI YÊU CẦU</button>
      </div>
    </section>
    
  );
}