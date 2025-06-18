"use client"
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { useAuthQuery } from "@/app/services/auth/useQuery";
import Tabs from "../Tabs";
import toast from "react-hot-toast";
import { setToken } from "@/app/utils/tokenServiceServerSide";
import { QRCode } from "antd";

export default function profile() {
  const router = useRouter();
  const pathname = typeof window !== "undefined" ? window.location.pathname : "";
  const [activeTab, setActiveTab] = useState(pathname.includes("security") ? "security" : "profile");
  const { data, refetch } = useAuthQuery.useProfile();
  const [isSetUp2FACode, setIsSetUp2FACode] = useState(false);
  const [code, setCode] = useState(Array(6).fill(""));
  const inputRefs = useRef<any>([]);

  const { mutate: updateMutate, isPending } = useAuthQuery.useUpdateProfile(
    (res) => {
      refetch();
      toast.success(res.message);
    },
    (err) => {
      toast.error(err.errors[0].message);
    }
  );

  const { mutate: changePasswordMutate } = useAuthQuery.useUpdatePassword(
    async (res) => {
      toast.success(res.message);
      setPasswordForm({ old_password: "", new_password: "", confirm_password: "" }); // Reset form
      await setToken("", "");
    },
    (err) => {
      toast.error(err.errors[0].message);
    }
  );

  const { data: data2FA, mutate: create2FAMutation } = useAuthQuery.useCreate2fa(
    (data) => {
      setIsSetUp2FACode(true)
    },
    (error) => {
      toast.error(error.message);
    }
  ) as {
    data: any;
    mutate: () => void;
  }

  const { mutate: verify2FAMutation } = useAuthQuery.useVerify2fa(
    (data) => {
      setIsSetUp2FACode(false)
      setCode(Array(6).fill(""))
      refetch()
      toast.success(data.message);
    },
    (error) => {
      toast.error(error.message);
    }
  )
  const [form, setForm] = useState({
    email: "",
    full_name: "",
    phone: "",
  });
  const [passwordForm, setPasswordForm] = useState({
    old_password: "",
    new_password: "",
    confirm_password: "",
  });

  useEffect(() => {
    if (data) {
      setForm({
        email: data.email || "",
        full_name: data.full_name || "",
        phone: data.phone || "",
      });
    }
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    updateMutate(form);
    // Có thể thêm thông báo thành công ở đây
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordForm(prev => ({ ...prev, [name]: value }));
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (passwordForm.new_password !== passwordForm.confirm_password) {
      toast.error("Mật khẩu xác nhận không khớp");
      return;
    }

    const codeStr = code.join('');
    if (codeStr.length !== 6) {
      toast.error("Vui lòng nhập đầy đủ mã xác thực 2FA");
      return;
    }


    const payload = {
      new_password: passwordForm.new_password,
      code: codeStr,
    };
    changePasswordMutate(payload);



  };

  // Hàm xử lý nhập ký tự
  const handleChangeCode = (e: any, idx: any) => {
    const val = e.target.value.replace(/[^0-9]/g, "");
    if (!val) return;
    const newCode = [...code];
    newCode[idx] = val[0];
    setCode(newCode);
    // Tự động chuyển focus sang ô tiếp theo
    if (idx < 5 && val) {
      inputRefs.current[idx + 1]?.focus();
    }
  };

  // Hàm xử lý phím Backspace
  const handleKeyDown = (e: any, idx: any) => {
    if (e.key === "Backspace") {
      if (code[idx]) {
        const newCode = [...code];
        newCode[idx] = "";
        setCode(newCode);
      } else if (idx > 0) {
        inputRefs.current[idx - 1]?.focus();
      }
    }
  };

  const handleCancel = () => {
    setIsSetUp2FACode(false);

    setCode(Array(6).fill(""));
  };



  return (
    <section className=" flex justify-center h-full p-4 overflow-y-auto">
      <div className="w-full max-w-lg mx-auto">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === "profile" && <form
          className="bg-white rounded-lg p-6 text-[#222] text-sm space-y-4 border border-[#e0e0e0] shadow"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <h2 className="text-left font-bold text-base mb-2">Cập nhật thông tin</h2>
          <div>
            <label htmlFor="email" className="block font-semibold mb-1 text-[#222]">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-md bg-white border border-[#e0e0e0] text-[#222] text-xs px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#1976d2]"
            />
          </div>
          <div>
            <label htmlFor="full_name" className="block font-semibold mb-1 text-[#222]">Tên đăng nhập</label>
            <input
              id="full_name"
              name="full_name"
              type="text"
              value={form.full_name}
              onChange={handleChange}
              className="w-full rounded-md bg-white border border-[#e0e0e0] text-[#222] text-xs px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#1976d2]"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block font-semibold mb-1 text-[#222]">Số điện thoại</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter Your Phone"
              className="w-full rounded-md bg-white border border-[#e0e0e0] text-[#222] text-xs px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#1976d2]"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#1976d2] px-4 py-2 rounded-md text-white text-xs font-medium"
              disabled={isPending}
            >
              {isPending ? "Đang cập nhật..." : "Cập nhật"}
            </button>
          </div>
        </form>}

        {activeTab === "security" && (
          <form
            className="bg-white rounded-lg p-6 text-[#222] text-sm space-y-4 border border-[#e0e0e0] shadow"
            onSubmit={handlePasswordSubmit}
          >
            <h2 className="text-left font-bold text-base mb-2">Đổi mật khẩu</h2>

            <div>
              <label htmlFor="new_password" className="block font-semibold mb-1 text-[#222]">
                Mật khẩu mới
              </label>
              <input
                id="new_password"
                name="new_password"
                type="password"
                value={passwordForm.new_password}
                onChange={handlePasswordChange}
                placeholder="Nhập mật khẩu mới"
                className="w-full rounded-md bg-white border border-[#e0e0e0] text-[#222] text-xs px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#1976d2]"
                required
              />
            </div>

            <div>
              <label htmlFor="confirm_password" className="block font-semibold mb-1 text-[#222]">
                Xác nhận mật khẩu
              </label>
              <input
                id="confirm_password"
                name="confirm_password"
                type="password"
                value={passwordForm.confirm_password}
                onChange={handlePasswordChange}
                placeholder="Xác nhận mật khẩu"
                className="w-full rounded-md bg-white border border-[#e0e0e0] text-[#222] text-xs px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#1976d2]"
                required
              />
            </div>

            <div>
              <label className="text-black font-semibold mb-1 block">Nhập mã gồm 6 chữ số:</label>
              <div className="flex gap-2 mb-2">
                {code.map((digit, idx) => (
                  <input
                    key={idx}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    ref={(el: any) => (inputRefs.current[idx] = el)}
                    className="w-12 h-12 text-center text-2xl text-black rounded-lg border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#7B61FF] font-mono"
                    onChange={(e) => handleChangeCode(e, idx)}
                    onKeyDown={(e) => handleKeyDown(e, idx)}
                  />
                ))}
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#1976d2] px-4 py-2 rounded-md text-white text-xs font-medium"
              >
                Cập nhật
              </button>
            </div>
          </form>
        )}


        {activeTab === '2fa' && (
          data?.is2FA == 1 ? (
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 flex flex-col items-center text-center space-y-4 max-w-md mx-auto">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-green-700">Đã bật 2FA thành công</h2>
              <p className="text-gray-600">
                Xác thực hai bước đã được kích hoạt. Từ bây giờ bạn sẽ cần mã từ ứng dụng Google Authenticator khi đăng nhập.
              </p>
              <button
                className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition font-medium"
              >
                Quay lại trang tài khoản
              </button>
            </div>
          ) :
            <div className="bg-white rounded-lg p-6 text-[#222] text-sm space-y-4 border border-[#e0e0e0] shadow">
              {!isSetUp2FACode ? (
                <div className="flex flex-col gap-2 items-center justify-center">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-2 ">
                      <img className="w-10 h-10 object-contain" src="/image/icGoogleAuthen.png" alt="Google Authenticator" />
                      <img className="w-18 h-18 object-contain" src="/image/dacs.png" alt="App Logo" />
                    </div>
                    <h2 className="text-lg font-bold text-[#7B61FF] text-center">Bật 2FA</h2>
                  </div>
                  <p className="text-base text-gray-500 text-center  max-w-xl">
                    Bật xác thực hai bước (2FA) để tăng cường bảo mật tài khoản của bạn. Sau khi bật, bạn sẽ cần nhập mã từ ứng dụng Google Authenticator mỗi khi đăng nhập.
                  </p>
                  <button
                    onClick={() => create2FAMutation()}
                    className="bg-blue-500 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:opacity-90 transition"
                  >
                    Bật 2FA
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-4 items-center justify-center w-full">
                  {/* STEP 1 */}
                  <div className="flex flex-col gap-2 items-center w-full">
                    <h3 className="text-[#7B61FF] font-bold text-lg">Bước 1</h3>
                    <p className="text-black text-center font-medium">
                      Quét mã QR bên dưới bằng ứng dụng Google Authenticator để kết nối.
                    </p>

                    <div className="bg-white rounded-lg">
                      <QRCode size={200} level="M" value={data2FA?.data?.qr} />
                    </div>

                    <span className="text-black font-medium">Hoặc</span>
                    <p className="text-black text-center font-medium">Nhập mã bí mật vào ứng dụng nếu không thể quét QR</p>
                    <div className="flex items-stretch gap-2">
                      <span className="bg-white px-4 py-2 rounded-lg font-mono tracking-widest truncate flex-1 text-lg select-all">
                        {data2FA?.data?.secret}
                      </span>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(data2FA?.data?.secret);
                          toast.success("Đã copy mã vào clipboard");
                        }}
                        className="bg-[#222] hover:bg-[#444] text-white py-2 px-3 rounded-lg"
                        title="Copy"
                      >
                        <i className="fi fi-rr-copy flex mt-[1px]"></i>
                      </button>
                    </div>
                  </div>

                  {/* STEP 2 */}
                  <div className="flex flex-col gap-2 items-center w-full">
                    <h3 className="text-[#7B61FF] font-bold text-lg">Bước 2</h3>
                    <p className="text-black text-center font-medium max-w-md">
                      Nhập mã xác thực 6 chữ số hiện trong ứng dụng Google Authenticator.
                    </p>
                    <span className="text-black">Nhập mã gồm 6 chữ số:</span>
                    <div className="flex gap-2 mb-6">
                      {code.map((digit, idx) => (
                        <input
                          key={idx}
                          type="text"
                          maxLength={1}
                          value={digit}
                          ref={(el: any) => (inputRefs.current[idx] = el)}
                          className="w-12 h-12 text-center text-2xl text-black rounded-lg border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#7B61FF] font-mono"
                          onChange={(e) => handleChangeCode(e, idx)}
                          onKeyDown={(e) => handleKeyDown(e, idx)}
                        />
                      ))}
                    </div>
                    <button
                      className={`w-full font-bold py-3 rounded-lg mb-3 transition ${code.every((c) => c)
                        ? "bg-blue-500 text-white hover:opacity-90"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                        }`}
                      disabled={!code.every((c) => c)}
                      onClick={() => verify2FAMutation({ code: code.join("") })}
                    >
                      Xác minh và bật 2FA
                    </button>
                    <button
                      className="w-full bg-black text-white font-bold py-3 rounded-lg hover:bg-gray-800 transition"
                      onClick={handleCancel}
                    >
                      Huỷ
                    </button>
                  </div>
                </div>
              )}
            </div>
        )}




      </div>
    </section>
  );

}