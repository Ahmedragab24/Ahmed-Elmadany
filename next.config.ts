/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/**",
      },
    ],
    domains: ["localhost", "res.cloudinary.com", "drive.google.com"],
  },
};

export default nextConfig;
