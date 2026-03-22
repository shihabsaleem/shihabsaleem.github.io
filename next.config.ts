const nextConfig = {
  output: "export", // for static export
  images: { 
    unoptimized: true, // for static export
    qualities: [75, 100]
  },
  // basePath: "", // for static export
  // trailingSlash: true,

  allowedDevOrigins: [
    "local-origin.dev",
    "*.local-origin.dev",
    "192.168.29.225",
  ],
};

export default nextConfig;
