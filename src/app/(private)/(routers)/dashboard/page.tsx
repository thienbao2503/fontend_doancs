// pages/about.js
import React from "react";
import Image from "next/image";
import Calendar from "../Calendar"; // Placeholder for custom Calendar component

export default function About() {
  // Structured data for top cards
  const topCards = [
    {
      title: "Vốn đầu tư",
      period: "Hàng tháng",
      amount: "$35000",
      label: "Tổng doanh thu",
      progress: 65,
      color: "#4F6FFF",
      bgColor: "#E6E9FF",
    },
    {
      title: "Doanh số",
      period: "Hàng năm",
      amount: "$25100",
      label: "Tổng doanh thu",
      progress: 35,
      color: "#F5B800",
      bgColor: "#FFF6D6",
    },
    {
      title: "Chi phí",
      period: "Hôm nay",
      amount: "$33000",
      label: "Tổng doanh thu",
      progress: 85,
      color: "#3AC2B9",
      bgColor: "#D6F3F1",
    },
    {
      title: "Lợi nhuận",
      period: "Hàng tuần",
      amount: "$2500",
      label: "Tổng doanh thu",
      progress: 55,
      color: "#4F9FFF",
      bgColor: "#D6E6FF",
    },
  ];

  // Structured data for overview progress
  const overviewProgress = [
    {
      title: "Thiết kế UX / UI",
      progress: 65,
      color: "#F15A24",
      bgColor: "#F7D6CA",
      team: [
        {
          src: "https://storage.googleapis.com/a1aa/image/221ceadf-0e65-4748-1f74-25490c40de02.jpg",
          alt: "Khuôn mặt của một phụ nữ có làn da sáng và tóc nâu đang cười",
        },
        {
          src: "https://storage.googleapis.com/a1aa/image/9a95ce04-3a65-4514-c5fe-0cfb510869d4.jpg",
          alt: "Khuôn mặt của một phụ nữ có làn da sáng và tóc vàng đang cười",
        },
        {
          src: "https://storage.googleapis.com/a1aa/image/52d2b401-bd68-4848-3ded-15de84c8bfe0.jpg",
          alt: "Khuôn mặt của một người đàn ông có làn da sáng và tóc nâu đang cười",
        },
      ],
    },
    {
      title: "Phát triển",
      progress: 59,
      color: "#4F6FFF",
      bgColor: "#D6D9FF",
      team: [
        {
          src: "https://storage.googleapis.com/a1aa/image/95e15d84-bc2b-4a4f-2489-dbc3e0c738ab.jpg",
          alt: "Khuôn mặt của một người đàn ông có làn da sáng và râu đang cười",
        },
        {
          src: "https://storage.googleapis.com/a1aa/image/032067c4-d752-49fd-7282-ce34b6cb96d1.jpg",
          alt: "Khuôn mặt của một phụ nữ có làn da sáng và tóc ngắn đang cười",
        },
        {
          src: "https://storage.googleapis.com/a1aa/image/1618a9ce-a147-45c8-6d65-37f29a5946fb.jpg",
          alt: "Khuôn mặt của một người đàn ông có làn da sáng và đội mũ đang cười",
        },
      ],
    },
    {
      title: "Kiểm thử",
      progress: 78,
      color: "#F5B800",
      bgColor: "#FFF6D6",
      team: [
        {
          src: "https://storage.googleapis.com/a1aa/image/95e15d84-bc2b-4a4f-2489-dbc3e0c738ab.jpg",
          alt: "Khuôn mặt của một người đàn ông có làn da sáng và râu đang cười",
        },
        {
          src: "https://storage.googleapis.com/a1aa/image/221ceadf-0e65-4748-1f74-25490c40de02.jpg",
          alt: "Khuôn mặt của một phụ nữ có làn da sáng và tóc nâu đang cười",
        },
      ],
    },
  ];

  // Structured data for progress items
  const progressItems = [
    {
      title: "Chủ đề Dịch vụ Đám mây",
      description: "Dành riêng cho chủ đề dựa trên đám mây/Khởi nghiệp.",
      progress: 25,
      color: "#4F6FFF",
      bgColor: "#E6E9FF",
      priority: "Cao",
      team: [
        {
          src: "https://storage.googleapis.com/a1aa/image/9a95ce04-3a65-4514-c5fe-0cfb510869d4.jpg",
          alt: "Khuôn mặt của một phụ nữ có làn da sáng và tóc vàng đang cười",
        },
        {
          src: "https://storage.googleapis.com/a1aa/image/9cd3de08-429e-4a8c-ebb7-f522f7cd0f42.jpg",
          alt: "Khuôn mặt của một phụ nữ có làn da sáng và tóc đen đang cười",
        },
      ],
    },
    {
      title: "WordPress Ô tô",
      description: "Chủ đề WordPress dựa trên kinh doanh đại lý ô tô.",
      progress: 30,
      color: "#F15A24",
      bgColor: "#FAD9CC",
      priority: "Trung bình",
      team: [
        {
          src: "https://storage.googleapis.com/a1aa/image/95e15d84-bc2b-4a4f-2489-dbc3e0c738ab.jpg",
          alt: "Khuôn mặt của một người đàn ông có làn da sáng và râu đang cười",
        },
        {
          src: "https://storage.googleapis.com/a1aa/image/221ceadf-0e65-4748-1f74-25490c40de02.jpg",
          alt: "Khuôn mặt của một phụ nữ có làn da sáng và tóc nâu đang cười",
        },
        {
          src: "https://storage.googleapis.com/a1aa/image/1618a9ce-a147-45c8-6d65-37f29a5946fb.jpg",
          alt: "Khuôn mặt của một người đàn ông có làn da sáng và đội mũ đang cười",
        },
        {
          src: "https://storage.googleapis.com/a1aa/image/95e15d84-bc2b-4a4f-2489-dbc3e0c738ab.jpg",
          alt: "Khuôn mặt của một người đàn ông có làn da sáng và râu đang cười",
        },
      ],
    },
    {
      title: "WordPress Ô tô",
      description: "Chủ đề WordPress dựa trên kinh doanh đại lý ô tô.",
      progress: 25,
      color: "#F15A24",
      bgColor: "#FAD9CC",
      priority: "Trung bình",
      team: [
        {
          src: "https://storage.googleapis.com/a1aa/image/95e15d84-bc2b-4a4f-2489-dbc3e0c738ab.jpg",
          alt: "Khuôn mặt của một người đàn ông có làn da sáng và râu đang cười",
        },
        {
          src: "https://storage.googleapis.com/a1aa/image/221ceadf-0e65-4748-1f74-25490c40de02.jpg",
          alt: "Khuôn mặt của một phụ nữ có làn da sáng và tóc nâu đang cười",
        },
        {
          src: "https://storage.googleapis.com/a1aa/image/1618a9ce-a147-45c8-6d65-37f29a5946fb.jpg",
          alt: "Khuôn mặt của một người đàn ông có làn da sáng và đội mũ đang cười",
        },
        {
          src: "https://storage.googleapis.com/a1aa/image/95e15d84-bc2b-4a4f-2489-dbc3e0c738ab.jpg",
          alt: "Khuôn mặt của một người đàn ông có làn da sáng và râu đang cười",
        },
      ],
    },
    {
      title: "Giáo dục Trực tuyến",
      description: "Bảng điều khiển cho học sinh và giáo viên từ xa.",
      progress: 15,
      color: "#F5B800",
      bgColor: "#FFF6D6",
      priority: "Thấp",
      team: [
        {
          src: "https://storage.googleapis.com/a1aa/image/95e15d84-bc2b-4a4f-2489-dbc3e0c738ab.jpg",
          alt: "Khuôn mặt của một người đàn ông có làn da sáng và râu đang cười",
        },
        {
          src: "https://storage.googleapis.com/a1aa/image/221ceadf-0e65-4748-1f74-25490c40de02.jpg",
          alt: "Khuôn mặt của một phụ nữ có làn da sáng và tóc nâu đang cười",
        },
      ],
    },
    {
      title: "Giáo dục Trực tuyến",
      description: "Bảng điều khiển cho học sinh và giáo viên từ xa.",
      progress: 40,
      color: "#3ac2b9",
      bgColor: "#d6f3f1",
      priority: "Thấp",
      team: [
        {
          src: "https://storage.googleapis.com/a1aa/image/95e15d84-bc2b-4a4f-2489-dbc3e0c738ab.jpg",
          alt: "Khuôn mặt của một người đàn ông có làn da sáng và râu đang cười",
        },
        {
          src: "https://storage.googleapis.com/a1aa/image/221ceadf-0e65-4748-1f74-25490c40de02.jpg",
          alt: "Khuôn mặt của một phụ nữ có làn da sáng và tóc nâu đang cười",
        },
      ],
    },
  ];

  // Structured data for tasks
  const tasks = [
    {
      title: "Phát triển Trực tiếp",
      description: "Ra mắt hệ thống thiết kế",
      iconColor: "#F15A24",
      iconPath:
        "M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5",
    },
    {
      title: "Điểm hành động được giao",
      description: "Ra mắt hệ thống thiết kế",
      iconColor: "#4F6FFF",
      iconPath:
        "M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605",
    },
    {
      title: "Ghi chú Riêng tư",
      description: "Ra mắt hệ thống thiết kế",
      iconColor: "#F5B800",
      iconPath:
        "m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z",
    },
    {
      title: "Yêu cầu Hỗ trợ",
      description: "Ra mắt hệ thống thiết kế",
      iconColor: "#4CB6A5",
      iconPath:
        "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z",
    },
  ];

  // Structured data for current projects
  const currentProjects = [
    {
      title: "Bộ giao diện Ứng dụng Quản lý Khách sạn",
      date: "02 / 02 / 2021",
      progress: 70,
      color: "#F15A24",
      bgColor: "#FAD9CC",
      category: "Thiết kế",
      team: [
        {
          src: "https://storage.googleapis.com/a1aa/image/8cbe9ee3-7733-4126-824d-20c24bd08fdf.jpg",
          alt: "Người đàn ông có râu và tóc ngắn",
        },
        {
          src: "https://storage.googleapis.com/a1aa/image/211ca014-7ac2-4e77-60b7-600c5aa3b567.jpg",
          alt: "Phụ nữ có tóc nâu và son môi đỏ",
        },
        {
          src: "https://storage.googleapis.com/a1aa/image/adc3b9fd-a303-44aa-7b29-42e19183510e.jpg",
          alt: "Phụ nữ có tóc nâu và tóc mái",
        },
        {
          src: "https://storage.googleapis.com/a1aa/image/79d70e7f-cef4-499c-e9d9-81b11fe63cef.jpg",
          alt: "Người đàn ông có ria mép và đội mũ",
        },
      ],
    },
    {
      title: "Cải tiến tổng quát trên các trang",
      date: "02 / 02 / 2021",
      progress: 60,
      color: "#4F6FFF",
      bgColor: "#D6E6FF",
      category: "Kiểm thử",
      team: [
        {
          src: "https://storage.googleapis.com/a1aa/image/211ca014-7ac2-4e77-60b7-600c5aa3b567.jpg",
          alt: "Phụ nữ có tóc nâu và son môi đỏ",
        },
        {
          src: "https://storage.googleapis.com/a1aa/image/357ec3db-dc86-497c-f39c-ed0146df71b7.jpg",
          alt: "Người đàn ông có tóc ngắn và râu",
        },
        {
          src: "https://storage.googleapis.com/a1aa/image/8cbe9ee3-7733-4126-824d-20c24bd08fdf.jpg",
          alt: "Người đàn ông có râu và tóc ngắn",
        },
        {
          src: "https://storage.googleapis.com/a1aa/image/8cbe9ee3-7733-4126-824d-20c24bd08fdf.jpg",
          alt: "Người đàn ông có râu và tóc ngắn",
        },
      ],
    },
    {
      title: "Thay đổi giao diện danh sách sản phẩm",
      date: "02 / 02 / 2021",
      progress: 55,
      color: "#3AC2B9",
      bgColor: "#D6F3F1",
      category: "SEO",
      team: [
        {
          src: "https://storage.googleapis.com/a1aa/image/211ca014-7ac2-4e77-60b7-600c5aa3b567.jpg",
          alt: "Phụ nữ có tóc nâu và son môi đỏ",
        },
        {
          src: "https://storage.googleapis.com/a1aa/image/357ec3db-dc86-497c-f39c-ed0146df71b7.jpg",
          alt: "Người đàn ông có tóc ngắn và râu",
        },
        {
          src: "https://storage.googleapis.com/a1aa/image/adc3b9fd-a303-44aa-7b29-42e19183510e.jpg",
          alt: "Phụ nữ có tóc nâu và tóc mái",
        },
        {
          src: "https://storage.googleapis.com/a1aa/image/dab4df30-f8f2-4778-d522-9b18ec083d5e.jpg",
          alt: "Phụ nữ có tóc đen ngắn",
        },
      ],
    },
  ];

  return (
    <div className="h-full w-full flex flex-col overflow-y-auto pb-1">
      {/* Top Cards Container */}
      <div className="overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-4">
          {topCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm"
            >
              <div className="flex justify-between items-start">
                <p className="text-sm text-[#1E1E50] font-normal">{card.title}</p>
                <span
                  className="text-white text-[10px] font-semibold px-2 py-[2px] rounded-md"
                  style={{ backgroundColor: card.color }}
                >
                  {card.period}
                </span>
              </div>
              <p className="text-2xl font-bold mt-2">{card.amount}</p>
              <p className="text-xs text-[#1E1E50] opacity-60 mt-1">{card.label}</p>
              <div className="mt-4 flex items-center space-x-2">
                <div
                  className="w-full h-1.5 rounded-full"
                  style={{ backgroundColor: card.bgColor }}
                >
                  <div
                    className="h-1.5 rounded-full"
                    style={{
                      backgroundColor: card.color,
                      width: `${card.progress}%`,
                    }}
                  ></div>
                </div>
                <span
                  className="text-xs font-semibold"
                  style={{ color: card.color }}
                >
                  {card.progress}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Overview Progress */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-6">Tổng quan Tiến độ</h2>
            <div className="space-y-6">
              {overviewProgress.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <p className="text-xs text-[#1E1E50] opacity-70 w-24">{item.title}</p>
                  <div className="flex-1 mx-4 flex items-center space-x-2">
                    <div className="w-full h-2 rounded-full" style={{ backgroundColor: item.bgColor }}>
                      <div
                        className="h-2 rounded-full"
                        style={{ backgroundColor: item.color, width: `${item.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-[#1E1E50] opacity-70 font-semibold w-8 text-right">
                      {item.progress}%
                    </span>
                  </div>
                  <div className="flex space-x-[-10px]">
                    {item.team.map((member, idx) => (
                      <Image
                        key={idx}
                        alt={member.alt}
                        className="w-8 h-8 rounded-full border-2 border-white"
                        src={member.src}
                        width={32}
                        height={32}
                        priority={idx < 2}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Items */}
          <div className="space-y-6">
            {progressItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm flex items-center justify-between"
              >
                <div className="flex items-center space-x-6">
                  <div className="relative w-16 h-16">
                    <svg
                      className="absolute top-0 left-0 w-16 h-16"
                      fill="none"
                      viewBox="0 0 64 64"
                      aria-hidden="true"
                    >
                      <circle
                        cx="32"
                        cy="32"
                        r="30"
                        stroke={item.bgColor}
                        strokeWidth="4"
                      />
                    </svg>
                    <svg
                      className="absolute top-0 left-0 w-16 h-16"
                      fill="none"
                      viewBox="0 0 64 64"
                      aria-hidden="true"
                    >
                      <path
                        d="M32 2a30 30 0 0 1 0 60"
                        stroke={item.color}
                        strokeDasharray="188.4"
                        strokeDashoffset={188.4 - (item.progress / 100) * 188.4}
                        strokeLinecap="round"
                        strokeWidth="4"
                      />
                    </svg>
                    <div
                      className="absolute inset-0 flex items-center justify-center font-semibold text-sm"
                      style={{ color: item.color, lineHeight: 1 }}
                    >
                      {item.progress}%
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-[#1E1E50]">{item.title}</p>
                    <p className="text-xs text-[#1E1E50] opacity-60 mt-1 max-w-xs">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="flex space-x-[-10px]">
                    {item.team.map((member, idx) => (
                      <Image
                        key={idx}
                        alt={member.alt}
                        className="w-8 h-8 rounded-full border-2 border-white"
                        src={member.src}
                        width={32}
                        height={32}
                        priority={idx < 2}
                      />
                    ))}
                  </div>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-md"
                    style={{ color: item.color, backgroundColor: item.bgColor }}
                  >
                    {item.priority}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Calendar and Tasks */}
        <div className="space-y-8">
          <Calendar />
          {/* Tasks List */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-4 text-[#1E1E50]">Nhiệm vụ của bạn</h2>
            <div className="space-y-4">
              {tasks.map((task, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-4 flex items-center space-x-4 hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="p-2 rounded-lg" style={{ backgroundColor: `${task.iconColor}15` }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke={task.iconColor}
                      className="size-6"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={task.iconPath}
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm text-[#1E1E50]">{task.title}</p>
                    <p className="text-xs text-[#1E1E50] opacity-60 mt-1">{task.description}</p>
                  </div>
                  <button className="text-gray-400 hover:text-[#1E1E50] transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
            <button className="mt-4 w-full py-2 text-sm font-medium text-[#4F6FFF] bg-[#E6E9FF] rounded-lg hover:bg-[#D6D9FF] transition-colors duration-200 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              Thêm nhiệm vụ mới
            </button>
          </div>
        </div>
      </div>

      {/* Current Projects Section */}
      <h2 className="text-3xl font-semibold text-[#1E1E50] mb-6">Dự án Hiện tại</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {currentProjects.map((project, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-[#1E1E50] mb-3">{project.title}</h3>
            <div className="flex items-center text-xs text-[#1E1E50] opacity-60 mb-4 space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                />
              </svg>
              <span>{project.date}</span>
            </div>
            <div className="w-full h-1.5 rounded-full mb-5" style={{ backgroundColor: project.bgColor }}>
              <div
                className="h-1.5 rounded-full"
                style={{ backgroundColor: project.color, width: `${project.progress}%` }}
              ></div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex -space-x-2">
                {project.team.map((member, idx) => (
                  <Image
                    key={idx}
                    alt={member.alt}
                    className="w-8 h-8 rounded-full border-2 border-white"
                    src={member.src}
                    width={32}
                    height={32}
                    priority={idx < 2}
                  />
                ))}
              </div>
              <span
                className="text-xs font-semibold rounded-md px-3 py-1"
                style={{ backgroundColor: project.bgColor, color: project.color }}
              >
                {project.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}