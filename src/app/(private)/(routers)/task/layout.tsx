import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Task",
  description: "task",
};
interface IPops {
  children: React.ReactNode;
}

export default function RootLayout(props: IPops) {
  const { children } = props;
  return children
}
