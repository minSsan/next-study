/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // 외부에서 이미지를 가져오는 경우, 이미지의 도메인을 등록해야한다.
  images: {
    domains: ["www.notion.so", "images.unsplash.com"],
  },
};

module.exports = nextConfig;
