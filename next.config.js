/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // 개발 오버레이 비활성화
  devServer: {
    overlay: false,
  },
}

module.exports = nextConfig 