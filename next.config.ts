const nextConfig = {
  images: { 
    qualities: [100]
  },

  allowedDevOrigins: [
    "local-origin.dev",
    "*.local-origin.dev",
    "192.168.70.199",
  ],

  trailingSlash: false, // Explicitly redirects /about/ to /about for SEO
};

export default nextConfig;
