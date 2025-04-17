import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["storage.googleapis.com"], // Thêm hostname vào đây
  },

};

export default nextConfig;
