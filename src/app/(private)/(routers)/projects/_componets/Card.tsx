import { IData } from "@/app/services/projects/type";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Popconfirm } from "antd";
import Image from "next/image";

interface TeamMember {
    src: string;
    alt: string;
}

// interface Project {
//     id: number;
//     title: string;
//     description: string;
//     start_date: string;
//     end_date: string;
//     goal: string;
//     budget: string;
//     duration: string;
//     progress: number;
//     priority: string;
//     priorityColor: string;
//     priorityBgColor: string;
//     circleBgColor: string;
//     team: TeamMember[];
// }

interface CardProps {
    project: IData;
    view: string;
    handleViewDetails: (project: IData) => void;
    handleEditProject: (project: IData) => void;
    handleDeleteProject: (id: number) => void;
}

function Card({ project, view, handleViewDetails, handleEditProject, handleDeleteProject }: CardProps) {
    return (
        <article
            key={project.id}
            className={`bg-white rounded-xl shadow-primary p-6 ${view === "grid"
                ? "flex flex-col justify-between"
                : "flex flex-col md:flex-row md:items-center gap-6"
                }`}
        >
            <div
                className={`flex justify-between items-center mb-4 ${view === "list" ? "md:w-1/4" : ""
                    }`}
            >
                <div className="relative w-16 h-16">
                    <svg
                        aria-hidden="true"
                        className="absolute top-0 left-0 w-16 h-16"
                        fill="none"
                        viewBox="0 0 64 64"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="32"
                            cy="32"
                            r="30"
                            stroke={"#abc4ed"}
                            strokeWidth="4"
                        />
                    </svg>
                    <svg
                        aria-hidden="true"
                        className="absolute top-0 left-0 w-16 h-16"
                        fill="none"
                        viewBox="0 0 64 64"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="32"
                            cy="32"
                            r="30"
                            stroke={"#4f6df5"}
                            strokeDasharray="188.4"
                            strokeDashoffset={188.4 - ((project?.total_doing + project?.total_done) == 0 ? 0 : (project?.total_done / (project?.total_doing + project?.total_done) * 100) / 100) * 188.4}
                            strokeLinecap="round"
                            strokeWidth="4"
                            transform="rotate(90 32 32)"
                        />
                    </svg>
                    <span
                        className="absolute inset-0 flex items-center justify-center font-semibold text-lg"
                        style={{ color: "#4f6df5" }}
                    >
                        {(project?.total_doing + project?.total_done) == 0 ? 0 : Math.floor(project?.total_done / (project?.total_doing + project?.total_done) * 100)
                        }%
                    </span>
                </div>
                {Number(project?.isMe) == 1 &&
                    <button
                        aria-label="Toggle favorite project"
                        className="text-yellow-400 text-xl cursor-pointer focus:outline-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                            />
                        </svg>
                    </button>
                }
            </div>
            <div className={view === "list" ? "md:w-1/2" : ""}>
                <h2 className="text-[#1a1a4b] font-semibold text-lg mb-2">
                    {project.name}
                </h2>
                <p className="text-[#6b6b8a] text-sm leading-relaxed">
                    {project.description}
                </p>
            </div>
            {/* {view === "grid" && <hr className="my-4 border-[#e6e6e6]" />} */}
            <div
                className={`flex items-center justify-between ${view === "list" ? "md:w-1/4" : ""
                    }`}
            >
                <div className="flex -space-x-3 mt-1">
                    {/* {Array.isArray(project?.teams) && project?.teams?.length > 0 ? project.teams.map((member, index) => (
                        <div className="relative w-10 h-10" key={index}>
                           
                            <div className="w-10 h-10 rounded-full bg-amber-300 flex justify-center items-center">
                                {member?.full_name.split(" ").slice(-1)[0].slice(0, 1)}
                            </div>
                        </div>
                    )) :

                        <button onClick={() => handleViewDetails(project)} className="cursor-pointer w-10 h-10 bg-gray-200 rounded-full flex justify-center items-center">
                            <PlusIcon className="w-6 h-6 text-white " />
                        </button>
                    } */}


                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-2 mt-4">
                <button
                    onClick={() => handleViewDetails(project)}
                    className="bg-[#4f6df5] cursor-pointer text-white text-xs font-semibold rounded-lg px-3 py-1 hover:bg-[#647AFA] transition-all duration-200"
                >
                    Xem Chi Tiết
                </button>
                <button
                    onClick={() => handleEditProject(project)}
                    className="bg-[#f9c23c] cursor-pointer text-white text-xs font-semibold rounded-lg px-3 py-1 hover:bg-[#e6b029] transition-all duration-200"
                >
                    Cập Nhật
                </button>
                {/* <Popconfirm title="Bạn có muốn xoá Dự Án?" onConfirm={() => handleDeleteProject(project.id)} okText="Xoá" cancelText="Huỷ">
                    <button
                        className="bg-[#f04a1a] text-white text-xs font-semibold rounded-lg px-3 py-1 hover:bg-[#d43f17] transition-all duration-200"
                    >
                        Delete
                    </button>
                </Popconfirm> */}
            </div>
        </article>
    );
}

export default Card;