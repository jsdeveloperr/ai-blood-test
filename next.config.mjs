/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { dev }) => {
      if (!dev) {
        config.devtool = false; // Disable source maps in production
      }
      return config;
    },
  };
  
export default nextConfig;
  