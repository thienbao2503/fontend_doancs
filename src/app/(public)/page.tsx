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


export default function Page() {

  const images = [
    "https://hogathongminh.vn/wp-content/uploads/2022/08/khao-sat-cong-trinh.jpeg",
    "https://png.pngtree.com/background/20230519/original/pngtree-worker-working-on-wood-at-construction-site-picture-image_2653850.jpg",
    "https://img.lovepik.com/photo/40196/0675.jpg_wh860.jpg"
  ];
  const [carouselIdx, setCarouselIdx] = useState(0);
  const [nextIdx, setNextIdx] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(1); // 1: next, -1: prev

  // Hàm chuyển ảnh
  const slideTo = (idx: number, dir = 1) => {
    if (isAnimating || idx === carouselIdx) return;
    setNextIdx(idx);
    setDirection(dir);
    setIsAnimating(true);
    setTimeout(() => {
      setCarouselIdx(idx);
      setIsAnimating(false);
    }, 700);
  };

  const handlePrev = () => {
    slideTo((carouselIdx - 1 + images.length) % images.length, -1);
  };
  const handleNext = () => {
    slideTo((carouselIdx + 1) % images.length, 1);
  };

  // Tự động chuyển ảnh mỗi 4 giây
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [carouselIdx, images.length]);

  return (
    <>

      <section className="relative flex-1 flex min-h-screen overflow-hidden">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{
              width: `${images.length * 100}%`,
              transform: `translateX(-${carouselIdx * (100 / images.length)}%)`
            }}
          >
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`slide-${idx}`}
                className="w-full h-full object-cover object-center flex-shrink-0"
                style={{ width: `${100 / images.length}%` }}
              />
            ))}
          </div>

          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-4">

          {carouselIdx === 0 && (
            <>
              <p className="text-white text-xl md:text-2xl font-semibold mb-2 drop-shadow-lg">We Are Trusted</p>
              <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">For Your Dream Home</h1>
              <button className="border border-white text-white px-8 py-3 rounded transition hover:bg-white hover:text-black font-semibold text-lg">GET A QUOTE</button>
            </>
          )}
          {carouselIdx === 1 && (
            <>
              <p className="text-white text-xl md:text-2xl font-semibold mb-2 drop-shadow-lg">We Are Professional</p>
              <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">For Your Dream Project</h1>
              <button className="border border-white text-white px-8 py-3 rounded transition hover:bg-white hover:text-black font-semibold text-lg">GET A QUOTE</button>
            </>
          )}
          {carouselIdx === 2 && (
            <>
              <p className="text-white text-xl md:text-2xl font-semibold mb-2 drop-shadow-lg">Professional Builder</p>
              <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">We Build Your Home</h1>
              <button className="border border-white text-white px-8 py-3 rounded transition hover:bg-white hover:text-black font-semibold text-lg">GET A QUOTE</button>
            </>
          )}
        </div>

      </section>


      {/* Three Features Section */}
      <div className="w-full flex justify-center px-4 mt-12">
        <div className="max-w-[1200px] w-full mx-auto flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-[#f9b707]/20">
          {/* Box 1 */}
          <div className="flex-1 flex flex-col items-center text-center bg-[#001025] text-[#f9b707] px-8 py-12">
            <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-dotted border-[#f9b707] mb-4 bg-[#0a1a36] shadow-lg">
              <ClipboardIcon className="w-10 h-10" />
            </div>
            <h3 className="font-bold text-xl mb-2 tracking-wide">Expert Worker</h3>
            <p className="text-[#f9b707] text-base leading-6 max-w-xs mx-auto opacity-90">Lorem ipsum dolor sit amet elit. Phasus nec pretim ornare velit non</p>
          </div>
          {/* Box 2 */}
          <div className="flex-1 flex flex-col items-center text-center bg-[#f9b707] text-[#001025] px-8 py-12">
            <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-dotted border-[#001025] mb-4 bg-[#ffe7a8] shadow-lg">
              <EyeIcon className="w-10 h-10" />
            </div>
            <h3 className="font-bold text-xl mb-2 tracking-wide">Quality Work</h3>
            <p className="text-[#001025] text-base leading-6 max-w-xs mx-auto opacity-90">Lorem ipsum dolor sit amet elit. Phasus nec pretim ornare velit non</p>
          </div>
          {/* Box 3 */}
          <div className="flex-1 flex flex-col items-center text-center bg-[#001025] text-[#f9b707] px-8 py-12">
            <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-dotted border-[#f9b707] mb-4 bg-[#0a1a36] shadow-lg">
              <ChatBubbleLeftRightIcon className="w-10 h-10" />
            </div>
            <h3 className="font-bold text-xl mb-2 tracking-wide">24/7 Support</h3>
            <p className="text-[#f9b707] text-base leading-6 max-w-xs mx-auto opacity-90">Lorem ipsum dolor sit amet elit. Phasus nec pretim ornare velit non</p>
          </div>
        </div>
      </div>
      {/* welcom */}
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12 md:gap-24 bg-white rounded-2xl shadow-xl mt-16">
        <img
          alt="Construction site with cranes and a building under construction against a blue sky with clouds"
          className="w-full max-w-md object-cover rounded-xl shadow-lg border border-gray-200"
          height={400}
          src="https://storage.googleapis.com/a1aa/image/30821fb7-6410-436f-6583-c60db2334247.jpg"
          width={400}
        />
        <div className="max-w-xl">
          <p className="text-[#f9b707] font-semibold text-base mb-3 uppercase tracking-widest">
            Welcome to Builderz
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#001025] mb-6 leading-tight drop-shadow">
            25 Years Experience
          </h1>
          <p className="mb-4 leading-relaxed text-gray-700 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
          </p>
          <p className="mb-8 leading-relaxed text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus. Aenean consectetur convallis porttitor. Aliquam interdum at lacus non blandit.
          </p>
          <button className="bg-[#f9b707] text-[#001025] font-bold px-8 py-3 rounded-full tracking-wide shadow-md hover:bg-[#ffd666] transition">
            Learn More
          </button>
        </div>
      </div>

      {/* We Provide Services    */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <p className="text-[#f5a623] font-semibold text-sm mb-1">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1f44]">
            We Provide Services
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Box 1 */}
          <div className="relative group rounded overflow-hidden">
            <img alt="Building construction site with steel rods and foundation work" className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105" src="https://storage.googleapis.com/a1aa/image/514b3784-b64f-4cfd-6813-2c81f8bfe7fd.jpg" />
            {/* Overlay on hover */}
            <div className="absolute inset-0 flex items-center justify-center bg-[#0a1f44]/90 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-center text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
              </p>
            </div>
            {/* Bottom bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-[#0a1f44] flex justify-between items-center px-4 py-3 z-10">
              <p className="text-[#f5a623] font-semibold text-sm">
                Building Construction
              </p>
              <button aria-label="Expand Building Construction" className="text-[#f5a623] text-xl font-bold focus:outline-none group-hover:text-white transition">
                <span className="text-2xl">+</span>
              </button>
            </div>
          </div>
          {/* Box 2 */}
          <div className="relative group rounded overflow-hidden">
            <img alt="House renovation with crane lifting roof panel and scaffolding" className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105" src="https://storage.googleapis.com/a1aa/image/0aa18806-6b22-4c11-feaa-51edf214254c.jpg" />
            <div className="absolute inset-0 flex items-center justify-center bg-[#0a1f44]/90 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-center text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-[#0a1f44] flex justify-between items-center px-4 py-3 z-10">
              <p className="text-[#f5a623] font-semibold text-sm">
                House Renovation
              </p>
              <button aria-label="Expand House Renovation" className="text-[#f5a623] text-xl font-bold focus:outline-none group-hover:text-white transition">
                <span className="text-2xl">+</span>
              </button>
            </div>
          </div>
          {/* Box 3 */}
          <div className="relative group rounded overflow-hidden">
            <img alt="Architecture design team reviewing blueprints in construction site" className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105" src="https://storage.googleapis.com/a1aa/image/df59cc55-809b-4c95-96bd-0dc0eb0993c9.jpg" />
            <div className="absolute inset-0 flex items-center justify-center bg-[#0a1f44]/90 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-center text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-[#0a1f44] flex justify-between items-center px-4 py-3 z-10">
              <p className="text-[#f5a623] font-semibold text-sm">
                Architecture Design
              </p>
              <button aria-label="Expand Architecture Design" className="text-[#f5a623] text-xl font-bold focus:outline-none group-hover:text-white transition">
                <span className="text-2xl">+</span>
              </button>
            </div>
          </div>
          {/* Box 4 */}
          <div className="relative group rounded overflow-hidden">
            <img alt="Interior design house under construction with green fence" className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105" src="https://storage.googleapis.com/a1aa/image/a4aa3dd9-7ac5-4c1e-a2ae-27b7a7fab4bd.jpg" />
            <div className="absolute inset-0 flex items-center justify-center bg-[#0a1f44]/90 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-center text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-[#0a1f44] flex justify-between items-center px-4 py-3 z-10">
              <p className="text-[#f5a623] font-semibold text-sm">
                Interior Design
              </p>
              <button aria-label="Expand Interior Design" className="text-[#f5a623] text-xl font-bold focus:outline-none group-hover:text-white transition">
                <span className="text-2xl">+</span>
              </button>
            </div>
          </div>
          {/* Box 5 */}
          <div className="relative group rounded overflow-hidden">
            <img alt="Fixing and support workers on construction site" className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105" src="https://storage.googleapis.com/a1aa/image/6783647a-9c57-47c6-3045-3918add7e578.jpg" />
            <div className="absolute inset-0 flex items-center justify-center bg-[#0a1f44]/90 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-center text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-[#0a1f44] flex justify-between items-center px-4 py-3 z-10">
              <p className="text-[#f5a623] font-semibold text-sm">
                Fixing & Support
              </p>
              <button aria-label="Expand Fixing & Support" className="text-[#f5a623] text-xl font-bold focus:outline-none group-hover:text-white transition">
                <span className="text-2xl">+</span>
              </button>
            </div>
          </div>
          {/* Box 6 */}
          <div className="relative group rounded overflow-hidden">
            <img alt="Painting and finishing team working on building exterior" className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105" src="https://storage.googleapis.com/a1aa/image/6783647a-9c57-47c6-3045-3918add7e578.jpg" />
            <div className="absolute inset-0 flex items-center justify-center bg-[#0a1f44]/90 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-center text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-[#0a1f44] flex justify-between items-center px-4 py-3 z-10">
              <p className="text-[#f5a623] font-semibold text-sm">
                Painting & Finishing
              </p>
              <button aria-label="Expand Painting & Finishing" className="text-[#f5a623] text-xl font-bold focus:outline-none group-hover:text-white transition">
                <span className="text-2xl">+</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Engineer */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <p className="text-yellow-400 font-semibold text-sm mb-2">
            Our Team
          </p>
          <h2 className="text-4xl font-extrabold text-slate-900">
            Meet Our Engineer
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Engineer 1 */}
          <div className="relative group bg-white rounded-lg overflow-hidden shadow">
            <img alt="Engineer 1 with yellow helmet and orange safety vest holding clipboard" className="w-full" height={350} src="https://storage.googleapis.com/a1aa/image/8844bd77-1f1f-4340-78a9-b1a29991b77f.jpg" width={300} />
            {/* Social icons overlay */}
            <div className="absolute top-4 left-0 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <a href="#" className="bg-[#1da1f2] hover:bg-[#0d8ddb] text-white w-10 h-10 flex items-center justify-center rounded-r opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="bg-[#3b5998] hover:bg-[#2d4373] text-white w-10 h-10 flex items-center justify-center rounded-r opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 320 512">
                  <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </a>
              <a href="#" className="bg-[#0077b5] hover:bg-[#005983] text-white w-10 h-10 flex items-center justify-center rounded-r opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="bg-[#e4405f] hover:bg-[#c32aa3] text-white w-10 h-10 flex items-center justify-center rounded-r opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 448 512">
                  <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
            </div>
            <div className="bg-[#f9b707] text-center py-4 hover:bg-[#f5a623] transition-colors duration-300">
              <h3 className="text-slate-900 font-bold text-lg">Adam Phillips</h3>
              <p className="text-slate-800 text-sm mt-1">CEO &amp; Founder</p>
            </div>
          </div>
          {/* Engineer 2 */}
          <div className="relative group bg-white rounded-lg overflow-hidden shadow">
            <img alt="Engineer 2 with yellow helmet and yellow safety vest talking on phone" className="w-full" height={350} src="https://storage.googleapis.com/a1aa/image/8844bd77-1f1f-4340-78a9-b1a29991b77f.jpg" width={300} />
            <div className="absolute top-4 left-0 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <a href="#" className="bg-[#1da1f2] hover:bg-[#0d8ddb] text-white w-10 h-10 flex items-center justify-center rounded-r opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="bg-[#3b5998] hover:bg-[#2d4373] text-white w-10 h-10 flex items-center justify-center rounded-r opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 320 512">
                  <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </a>
              <a href="#" className="bg-[#0077b5] hover:bg-[#005983] text-white w-10 h-10 flex items-center justify-center rounded-r opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="bg-[#e4405f] hover:bg-[#c32aa3] text-white w-10 h-10 flex items-center justify-center rounded-r opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
            <div className="bg-[#f9b707] text-center py-4 hover:bg-[#f5a623] transition-colors duration-300">
              <h3 className="text-slate-900 font-bold text-lg">Dylan Adams</h3>
              <p className="text-slate-800 text-sm mt-1">Civil Engineer</p>
            </div>
          </div>
          {/* Engineer 3 */}
          <div className="relative group bg-white rounded-lg overflow-hidden shadow">
            <img alt="Engineer 3 with yellow helmet and orange safety vest crossed arms" className="w-full" height={350} src="https://storage.googleapis.com/a1aa/image/baff7ee0-116d-428a-ac4c-6842f7315388.jpg" width={300} />
            <div className="absolute top-4 left-0 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <a href="#" className="bg-[#1da1f2] hover:bg-[#0d8ddb] text-white w-10 h-10 flex items-center justify-center rounded-r opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="bg-[#3b5998] hover:bg-[#2d4373] text-white w-10 h-10 flex items-center justify-center rounded-r opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="bg-[#0077b5] hover:bg-[#005983] text-white w-10 h-10 flex items-center justify-center rounded-r opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="#" className="bg-[#e4405f] hover:bg-[#c32aa3] text-white w-10 h-10 flex items-center justify-center rounded-r opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
            <div className="bg-[#f9b707] text-center py-4 hover:bg-[#f5a623] transition-colors duration-300">
              <h3 className="text-slate-900 font-bold text-lg">Jhon Doe</h3>
              <p className="text-slate-800 text-sm mt-1">Interior Designer</p>
            </div>
          </div>
          {/* Engineer 4 */}
          <div className="relative group bg-white rounded-lg overflow-hidden shadow">
            <img alt="Engineer 4 with yellow helmet and white t-shirt arms crossed" className="w-full" height={350} src="https://storage.googleapis.com/a1aa/image/f94691ef-8537-4e2f-8c13-4b7640ce335e.jpg" width={300} />
            <div className="absolute top-4 left-0 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <a href="#" className="bg-[#1da1f2] hover:bg-[#0d8ddb] text-white w-10 h-10 flex items-center justify-center rounded-r opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="bg-[#3b5998] hover:bg-[#2d4373] text-white w-10 h-10 flex items-center justify-center rounded-r opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 320 512">
                  <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </a>
              <a href="#" className="bg-[#0077b5] hover:bg-[#005983] text-white w-10 h-10 flex items-center justify-center rounded-r opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="bg-[#e4405f] hover:bg-[#c32aa3] text-white w-10 h-10 flex items-center justify-center rounded-r opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
            <div className="bg-[#f9b707] text-center py-4 hover:bg-[#f5a623] transition-colors duration-300">
              <h3 className="text-slate-900 font-bold text-lg">Jane Smith</h3>
              <p className="text-slate-800 text-sm mt-1">Project Manager</p>
            </div>
          </div>
        </div>
      </section>

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


      {/* Latest From Our Blog  */}
      <section className="bg-white text-center px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-16">
        <p className="text-yellow-400 font-semibold text-sm mb-2">
          Latest Blog
        </p>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-12">
          Latest From Our Blog
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Card 1 */}
          <article className="max-w-sm mx-auto">
            <img
              alt="House under construction with wooden frame and crane lifting materials"
              className="w-full object-cover"
              height={250}
              src="https://storage.googleapis.com/a1aa/image/88ad67be-a2e3-4c47-5814-964e3e315d95.jpg"
              width={400}
            />
            <div className="flex items-center bg-slate-900 text-yellow-400 font-semibold text-base px-4 py-3">
              <span className="flex-1 text-left">
                Lorem ipsum dolor sit
              </span>
              <button aria-label="Expand blog post" className="text-yellow-400 text-2xl font-bold leading-none">
                +
              </button>
            </div>
            <div className="bg-slate-100 px-6 py-6 text-slate-700 text-center">
              <p className="italic text-sm mb-3">
                <span className="not-italic font-semibold underline decoration-slate-400">
                  By Adminm In Construction
                </span>
              </p>
              <p className="text-base leading-relaxed">
                <span className="font-semibold">
                  Lorem ipsum dolor sit
                </span>
                amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor
              </p>
            </div>
          </article>
          {/* Card 2 */}
          <article className="max-w-sm mx-auto">
            <img
              alt="Completed house with green lawn and clear blue sky"
              className="w-full object-cover"
              height={250}
              src="https://storage.googleapis.com/a1aa/image/c20e3938-2543-4a96-6566-29c16dd97a13.jpg"
              width={400}
            />
            <div className="flex items-center bg-slate-900 text-yellow-400 font-semibold text-base px-4 py-3">
              <span className="flex-1 text-left">
                Lorem ipsum dolor sit
              </span>
              <button aria-label="Expand blog post" className="text-yellow-400 text-2xl font-bold leading-none">
                +
              </button>
            </div>
            <div className="bg-slate-100 px-6 py-6 text-slate-700 text-center">
              <p className="italic text-sm mb-3">
                <span className="not-italic font-semibold underline decoration-slate-400">
                  By In Construction
                </span>
              </p>
              <p className="text-base leading-relaxed">
                <span className="font-semibold">
                  Lorem ipsum dolor sit
                </span>
                amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor
              </p>
            </div>
          </article>
          {/* Card 3 */}
          <article className="max-w-sm mx-auto">
            <img
              alt="Construction workers on site working with tools and materials"
              className="w-full object-cover"
              height={250}
              src="https://storage.googleapis.com/a1aa/image/7baaed3d-d966-4999-dcd7-f33bb66e5659.jpg"
              width={400}
            />
            <div className="flex items-center bg-slate-900 text-yellow-400 font-semibold text-base px-4 py-3">
              <span className="flex-1 text-left">
                Lorem ipsum dolor sit
              </span>
              <button aria-label="Expand blog post" className="text-yellow-400 text-2xl font-bold leading-none">
                +
              </button>
            </div>
            <div className="bg-slate-100 px-6 py-6 text-slate-700 text-center">
              <p className="italic text-sm mb-3">
                <span className="not-italic font-semibold underline decoration-slate-400">
                  By In Construction
                </span>
              </p>
              <p className="text-base leading-relaxed">
                <span className="font-semibold">
                  Lorem ipsum dolor sit
                </span>
                amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor
              </p>
            </div>
          </article>
        </div>
      </section>


    </>
  );
}