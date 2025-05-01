import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["storage.googleapis.com"], // Thêm hostname vào đây
  },
  async rewrites() {
    return [
      {
        source: "/dang-nhap",
        destination: "/login",
      },
      {
        source: "/tong-quan",
        destination: "/dashboard",
      },
      {
        source: "/du-an",
        destination: "/projects",
      },
      {
        source: "/cong-viec",
        destination: "/tasks",
      },
    ]
  }


};

export default nextConfig;
