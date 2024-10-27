import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/auth",
        destination: "/auth/login",
        permanent: true,
      },
      {
        source: "/",
        destination: "/exams",
        permanent: true,
      },
      {
        source: "/overview",
        destination: "/exams",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
