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

  async redirects() {
    return [
      {
        source: '/work/:slug',
        destination: '/:slug',
        permanent: true, // 308 Permanent Redirect for SEO
      },
    ]
  },
};

export default nextConfig;
