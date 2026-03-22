const nextConfig = {
  output: process.env.NODE_ENV === "development" ? undefined : "export", // bypass dev mode static param crash
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
