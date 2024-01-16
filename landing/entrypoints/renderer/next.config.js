module.exports = {
  experimental: {
    externalDir: true,
    swcFileReading: false,
    workerThreads: true,
    esmExternals: 'loose',
  },
  output: 'standalone',
  images: {
    domains: ['wp.dream-team.tech'],
  },
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, must-revalidate',
          },
        ],
      },
      {
        source: '/contacts',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, must-revalidate',
          },
        ],
      },
      {
        source: '/privacy-policy',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, must-revalidate',
          },
        ],
      },
    ]
  },
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.(gltf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/media/[name][ext]',
        },
      },
      {
        test: /\.(bin)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/media/[name][ext]',
        },
      }
    )

    return config
  },
}
