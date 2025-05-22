import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Project",
  description: "project",
};
interface IPops {
  children: React.ReactNode;
}

export default function RootLayout(props: IPops) {
  const { children } = props;
  return children
}
