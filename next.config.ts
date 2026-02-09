const nextConfig = {
  output: "export", // for static export
  images: { unoptimized: true }, // for static export
  // basePath: "", // for static export
  // trailingSlash: true,

  allowedDevOrigins: [
    "local-origin.dev",
    "*.local-origin.dev",
    "192.168.29.225",
  ],
};

export default nextConfig;
