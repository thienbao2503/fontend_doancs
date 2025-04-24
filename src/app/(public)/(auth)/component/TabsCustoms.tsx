interface IProps {
  isLogin: boolean,
  handleChange: () => void
}
function TabsCustoms({ isLogin, handleChange }: IProps) {
  return (
    <div className="flex justify-center mb-8 bg-white/30 rounded-full p-1">
      <button
        onClick={handleChange}
        className={`px-6 py-2 flex-1 cursor-pointer text-lg font-semibold rounded-full transition-all duration-300 ${isLogin ? "bg-white text-sky-700 shadow-md" : "text-gray-700"
          }`}
      >
        Đăng Nhập
      </button>
      <button
        onClick={handleChange}
        className={`px-6 py-2 flex-1 cursor-pointer text-lg font-semibold rounded-full transition-all duration-300 ${!isLogin ? "bg-white text-sky-700 shadow-md" : "text-gray-700"
          }`}
      >
        Đăng Ký
      </button>
    </div>
  );
}

export default TabsCustoms;