interface IProps {
    title: string,
    view: string,
    handleChangeTypeLayout: (type: string) => void,
    handleOpenModalCreate: () => void
}
function HeaderSearch({ title, view, handleChangeTypeLayout, handleOpenModalCreate }: IProps) {
    return (
        <header className="bg-white rounded-xl shadow-primary flex flex-col sm:flex-row items-center justify-between px-6 py-4">
            <h1 className="text-[#1a1a4b] text-lg font-semibold">{title}</h1>
            <div className="flex items-center space-x-3 mt-4 sm:mt-0 bg-white rounded-xl px-3 py-2">
                {/* <select
                    aria-label="Status filter"
                    className="text-[#1a1a4b] text-sm font-semibold h-[35px] bg-[#f7f9fc] rounded-md px-3 cursor-pointer focus:outline-none"
                    defaultValue="in-progress"
                >
                    <option value="" disabled>
                    Chọn trạng thái
                    </option>
                    <option value="in-progress">Đang tiến hành</option>
                    <option value="completed">Hoàn thành</option>
                    <option value="on-hold">Đang chờ</option>
                </select> */}
                <button
                    aria-label="Grid view"
                    onClick={() => handleChangeTypeLayout("grid")}
                    className={`rounded-lg p-2 h-[35px] w-[35px] flex items-center justify-center ${view === "grid"
                        ? "bg-[#4f6df5] text-white"
                        : "bg-[#f7f9fc] text-[#7e7e9f]"
                        }`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 8.25h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
                        />
                    </svg>
                </button>
                <button
                    aria-label="List view"
                    onClick={() => handleChangeTypeLayout("list")}
                    className={`rounded-lg p-2 h-[35px] w-[35px] flex items-center justify-center 
                        ${view === "list"
                            ? "bg-[#4f6df5] text-white"
                            : "bg-[#f7f9fc] text-[#7e7e9f]"
                        }
                    `}

                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                        />
                    </svg>
                </button>
                <div className="border-l border-[#d9d9d9] h-6" />
                <button
                    className="bg-gradient-to-r h-[35px]  from-[#4f6df5] to-[#647AFA] text-white rounded-lg px-5 py-2 text-sm font-medium hover:from-[#647AFA] hover:to-[#4f6df5] transition-all duration-200 shadow-md"
                    type="button"
                    onClick={handleOpenModalCreate}
                >
                    + Thêm dự án
                </button>
            </div>
        </header>
    );
}

export default HeaderSearch;