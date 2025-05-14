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
  return children
}
