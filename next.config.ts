import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    includePaths : ['./app'],
    logger: {
      warn: function(message: string) {
        console.warn(message)
      }
    }
  }
};

export default nextConfig;
