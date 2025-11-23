const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "",
  trailingSlash: true,

  allowedDevOrigins: [
    "local-origin.dev",
    "*.local-origin.dev",
    "192.168.29.225",
  ],
};

export default nextConfig;
