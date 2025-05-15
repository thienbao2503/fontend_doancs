import { Footer, Navbar } from "@/layouts";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Công Việc",
  description: "Công Việc",
};
interface IPops {
  children: React.ReactNode;
}

export default function RootLayout(props: IPops) {
  const { children } = props;
  return <div className="bg-white min-h-screen flex flex-col font-sans">
    <Navbar />
    {children}
    <Footer />
  </div>
}
