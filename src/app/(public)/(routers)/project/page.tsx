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
  const [filter, setFilter] = useState("ALL");

  // Dữ liệu mẫu, bạn có thể thay đổi theo thực tế
  const projects = [
    {
      img: "https://storage.googleapis.com/a1aa/image/145bc0ba-5622-41ff-0d74-341986ba2fc6.jpg",
      name: "Project Name",
      status: "COMPLETE"
    },
    {
      img: "https://storage.googleapis.com/a1aa/image/2268eee1-4dec-4166-4cd8-8d91bce9deeb.jpg",
      name: "Project Name",
      status: "COMPLETE"
    },
    {
      img: "https://storage.googleapis.com/a1aa/image/77909152-20ea-4f10-d8b4-d4959bf3e853.jpg",
      name: "Project Name",
      status: "RUNNING"
    },
    {
      img: "https://storage.googleapis.com/a1aa/image/a8f3c4c2-1d50-4c47-efb7-573b32cb9345.jpg",
      name: "Project Name",
      status: "RUNNING"
    },
    {
      img: "https://storage.googleapis.com/a1aa/image/ae16af95-afd9-4f3b-74f1-2a40c10405f4.jpg",
      name: "Project Name",
      status: "UPCOMING"
    },
    {
      img: "https://storage.googleapis.com/a1aa/image/f1fe6b49-5383-497f-bc66-0667a800e503.jpg",
      name: "Project Name",
      status: "UPCOMING"
    }
  ];

  const filteredProjects = filter === "ALL" ? projects : projects.filter(p => p.status === filter);

  return (
    <div className="bg-white min-h-screen flex flex-col font-sans">        
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-8">
              <p className="text-[13px] font-semibold text-[#E9A826] mb-1">
                Our Projects
              </p>
              <h1 className="text-3xl sm:text-4xl font-extrabold">
                Visit Our Projects
              </h1>
              <div className="mt-4 flex justify-center gap-2 flex-wrap">
                <button
                  className={`bg-[#071B2F] text-white text-[12px] font-semibold px-3 py-1 rounded-sm ${filter === "ALL" ? "font-bold" : ""}`}
                  onClick={() => setFilter("ALL")}
                >
                  ALL
                </button>
                <button
                  className={`bg-[#E9A826] text-[#071B2F] text-[12px] font-semibold px-3 py-1 rounded-sm ${filter === "COMPLETE" ? "font-bold bg-[#071B2F] text-white" : ""}`}
                  onClick={() => setFilter("COMPLETE")}
                >
                  COMPLETE
                </button>
                <button
                  className={`bg-[#E9A826] text-[#071B2F] text-[12px] font-semibold px-3 py-1 rounded-sm ${filter === "RUNNING" ? "font-bold bg-[#071B2F] text-white" : ""}`}
                  onClick={() => setFilter("RUNNING")}
                >
                  RUNNING
                </button>
                <button
                  className={`bg-[#E9A826] text-[#071B2F] text-[12px] font-semibold px-3 py-1 rounded-sm ${filter === "UPCOMING" ? "font-bold bg-[#071B2F] text-white" : ""}`}
                  onClick={() => setFilter("UPCOMING")}
                >
                  UPCOMING
                </button>
              </div>
            </div>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {filteredProjects.map((project, idx) => (
                <article className="group relative" key={idx}>
                  <img
                    alt={project.name}
                    className="w-full h-[250px] object-cover"
                    height="250"
                    src={project.img}
                    width="400"
                  />
                  {/* Overlay hiển thị khi hover */}
                  <div className="absolute inset-0 flex items-center justify-center bg-[#071B2F]/90 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-center text-base leading-relaxed">
                      Lorem ipsum dolor sit amet elit. Phasel nec pretium mi. Curabit facilis ornare velit non. Aliqu metus tortor, auctor id gravi condime, viverra quis sem.
                    </p>
                  </div>
                  {/* Thanh dưới cùng */}
                  <div className="absolute bottom-0 left-0 right-0 flex h-12">
                    <div className="flex-1 bg-[#071B2F] flex items-center px-4">
                      <h3 className="text-[14px] font-bold text-[#E9A826]">
                        {project.name}
                      </h3>
                    </div>
                    <button
                      aria-label="Expand project details"
                      className="bg-[#E9A826] border-l border-[#071B2F] flex items-center justify-center w-12 h-full transition group-hover:bg-[#E9A826]"
                    >
                      <span className="text-2xl text-white font-light">+</span>
                    </button>
                  </div>
                </article>
              ))}
            </section>
            <div className="flex justify-center">
              <button className="bg-[#E9A826] text-[12px] font-semibold text-[#071B2F] px-6 py-2 rounded-sm" type="button">
                LOAD MORE
              </button>
            </div>
          </main>

        
        {/* You May Ask      */}
        <section className="w-full mx-auto px-6 py-12">
          <div className="text-center mb-8">
            <p className="text-yellow-400 font-semibold text-sm">Frequently Asked Question</p>
            <h2 className="text-4xl font-extrabold text-slate-900 mt-1">You May Ask</h2>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-12 max-w-5xl mx-auto">
            <div className="flex-1 space-y-4">
              {[...Array(5)].map((_, i) => (
                <button
                  key={i}
                  className="w-full border border-gray-200 px-6 py-4 flex justify-between items-center text-slate-900 text-base font-normal"
                  type="button"
                >
                  Lorem ipsum dolor sit amet?
                  <span className="text-2xl text-yellow-400">+</span>
                </button>
              ))}
            </div>
            <div className="hidden md:block border-l border-yellow-400"></div>
            <div className="flex-1 space-y-4 mt-6 md:mt-0">
              {[...Array(5)].map((_, i) => (
                <button
                  key={i}
                  className="w-full border border-gray-200 px-6 py-4 flex justify-between items-center text-slate-900 text-base font-normal"
                  type="button"
                >
                  Lorem ipsum dolor sit amet?
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