/** @type {import('next').NextConfig} */
const path = require("path");


const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  env: {
    key: "develops",
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.module.scss$/,
      use: [
        {
          loader: "postcss-loader",
        },
        {
          loader: "sass-loader",
        },
      ],
      // 排除 node_modules 目录下的文件
      exclude: path.resolve(__dirname, "node_modules"),
    })
    return config
  },
}

module.exports = nextConfig;
