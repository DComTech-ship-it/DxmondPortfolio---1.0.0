cat > next.config.js << 'EOL'
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  // Disable turbopack for now as it's causing issues
  experimental: {
    turbo: false
  }
}

module.exports = nextConfig
EOL