"use client";
// pages/about.js
import React from "react";
import Calendar from "../Calendar"; // Placeholder for custom Calendar component
import { useProjectQuery } from "@/app/services/projects/useQuery";
import { useTaskQuery } from "@/app/services/tasks/useQuery";
import { Pagination } from "antd";

export default function About() {

  const [pageTasks, setPageTasks] = React.useState(1);
  // Structured data for top cards
  const { data: dataProject } = useProjectQuery.useGetAll({
    page: 1,
    limit: 5,
  })

  const { data: dataTask, } = useTaskQuery.useGetAll({ page: pageTasks, limit: 5 })

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // tháng bắt đầu từ 0
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }



  return (
    <div className="h-full w-full flex flex-col overflow-y-auto pb-1">

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Overview Progress */}
        <div className="lg:col-span-2 space-y-5">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-6">Tổng quan Tiến độ</h2>
            <div className="space-y-6">
              {(Array.isArray(dataProject) && dataProject.length > 0) ? dataProject.map((project, index) => (
                <div key={index} className="flex items-center justify-between">
                  <p className="text-xs text-[#1E1E50] opacity-70 w-40">{project.name}</p>
                  <div className="flex-1 mx-4 flex items-center space-x-2">
                    <div className="w-full h-2 rounded-full" style={{ backgroundColor: index % 2 === 0 ? '#E6E9FF' : '#F0F1FF' }}>
                      <div
                        className="h-2 rounded-full"
                        style={{
                          backgroundColor: index % 2 === 0 ? '#4F6FFF' : '#6B7CFF',
                          width: `${(project?.total_doing + project?.total_done) == 0 ? 0 : Math.floor(project?.total_done / (project?.total_doing + project?.total_done) * 100)}%`
                        }}
                      ></div>
                    </div>
                    <span className="text-xs text-[#1E1E50] opacity-70 font-semibold w-8 text-right">
                      {(project?.total_doing + project?.total_done) == 0 ? 0 : Math.floor(project?.total_done / (project?.total_doing + project?.total_done) * 100)}%
                    </span>
                  </div>
                </div>
              )) :
                <div>
                  <p className="text-center text-[#1E1E50] opacity-60">Không có dữ liệu dự án</p>
                </div>
              }
            </div>
          </div>

          {/* Progress Items */}
          <div className="space-y-2">
            {(Array.isArray(dataTask?.data) && dataTask?.data.length > 0) ? dataTask?.data.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm flex items-center justify-between"
              >
                <div className="flex items-center space-x-6">
                  <div className="relative w-16 h-16">
                    {/* Background circle */}
                    <svg
                      className="absolute top-0 left-0 w-16 h-16 -rotate-90" // Added -rotate-90 to start from top
                      fill="none"
                      viewBox="0 0 64 64"
                    >
                      <circle
                        cx="32"
                        cy="32"
                        r="28" // Reduced radius slightly to prevent edge clipping
                        stroke={index % 2 === 0 ? '#E6E9FF' : '#F0F1FF'}
                        strokeWidth="4"
                        className="opacity-25"
                      />
                      {/* Progress circle */}
                      <circle
                        cx="32"
                        cy="32"
                        r="28" // Same radius as background circle
                        stroke={index % 2 === 0 ? '#4F6FFF' : '#6B7CFF'}
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 28}`} // Calculate circumference
                        strokeDashoffset={2 * Math.PI * 28 * (1 - item.progress_supervisor / 100)} // Calculate offset
                        className="transition-all duration-500 ease-in-out"
                      />
                    </svg>
                    {/* Percentage text */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span
                        className="text-sm font-semibold"
                        style={{
                          color: index % 2 === 0 ? '#4F6FFF' : '#6B7CFF'  // Changed text color to match progress
                        }}
                      >
                        {item.progress_supervisor}%
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-[#1E1E50]">{item.name}</p>
                    <p className="text-xs text-[#1E1E50] opacity-60 mt-1 max-w-xs">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="flex space-x-[-10px]">
                    {/* {item.team.map((member, idx) => (
                      <Image
                        key={idx}
                        alt={member.alt}
                        className="w-8 h-8 rounded-full border-2 border-white"
                        src={member.src}
                        width={32}
                        height={32}
                        priority={idx < 2}
                      />
                    ))} */}
                  </div>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-md"
                    style={{
                      color:
                        item.priority === 'high'
                          ? '#D32F2F' // đỏ đậm
                          : item.priority === 'medium'
                            ? '#EF6C00' // cam đậm
                            : '#388E3C', // xanh đậm
                      backgroundColor:
                        item.priority === 'high'
                          ? '#FFEBEE' // đỏ nhạt
                          : item.priority === 'medium'
                            ? '#FFF3E0' // cam nhạt
                            : '#E8F5E9', // xanh nhạt
                    }}
                  >
                    {item.priority === 'high'
                      ? 'Cao'
                      : item.priority === 'medium'
                        ? 'Trung bình'
                        : 'Thấp'}
                  </span>
                </div>
              </div>
            )) :
              <div className="bg-white rounded-xl p-6 shadow-sm flex items-center justify-between">
                <p className="text-center text-[#1E1E50] opacity-60">Không có dữ liệu nhiệm vụ</p>
              </div>
            }
          </div>
          <div className="flex justify-center">
            <Pagination
              total={dataTask?.pagination?.totalPages || 0}
              current={pageTasks}
              pageSize={1}
              onChange={(page) => setPageTasks(page)}
              className="mt-4"
              showSizeChanger={false}
            />
          </div>
        </div>

        {/* Right Column - Calendar and Tasks */}
        <div className="space-y-8">
          <Calendar />
          {/* Tasks List */}
          {/* <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-4 text-[#1E1E50]">Nhiệm vụ của bạn</h2>
            <div className="space-y-4"> */}
          {/* {tasks.map((task, index) => (
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
              ))} */}
          {/* </div>
            <button className="mt-4 w-full py-2 text-sm font-medium text-[#4F6FFF] bg-[#E6E9FF] rounded-lg hover:bg-[#D6D9FF] transition-colors duration-200 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              Thêm nhiệm vụ mới
            </button>
          </div> */}
        </div>
      </div>

      {/* Current Projects Section */}
      <h2 className="text-3xl font-semibold text-[#1E1E50] mb-6">Dự án Hiện tại</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {(Array.isArray(dataProject) && dataProject?.length > 0) ? dataProject.map((project, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-[#1E1E50] mb-3">{project.name}</h3>
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
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="font-medium text-gray-800">Thời gian:</span>
                <span className="bg-gray-100 px-2 py-1 rounded-md text-gray-700">
                  {formatDate(project.start_date)}
                </span>
                <span className="text-gray-400">→</span>
                <span className="bg-gray-100 px-2 py-1 rounded-md text-gray-700">
                  {formatDate(project.end_date)}
                </span>
              </div>
            </div>
            <div className="w-full h-1.5 rounded-full mb-5" style={{ backgroundColor: index % 2 === 0 ? '#E6E9FF' : '#F0F1FF' }}>
              <div
                className="h-1.5 rounded-full"
                style={{
                  backgroundColor: index % 2 == 0 ? '#4F6FFF' : '#6B7CFF'
                  , width: `${(project?.total_doing + project?.total_done) == 0 ? 0 : Math.floor(project?.total_done / (project?.total_doing + project?.total_done) * 100)}%`
                }}
              ></div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex -space-x-2">
                Loại dự án:
              </div>
              <span
                className="text-xs font-semibold rounded-md px-3 py-1"
                style={{
                  backgroundColor: index % 2 === 0 ? '#E6E9FF' : '#F0F1FF'

                  , color: index % 2 === 0 ? '#4F6FFF' : '#6B7CFF'
                }}
              >
                {project.category_name}
              </span>
            </div>
          </div>
        )) :
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-center text-[#1E1E50] opacity-60">Không có dữ liệu dự án</p>
          </div>
        }
      </div>
    </div>
  );
}