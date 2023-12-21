module.exports = {
  experimental: {
    externalDir: true,
    swcFileReading: false,
    workerThreads: true,
    outputStandalone: true,
    esmExternals: 'loose',
  },
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
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.(gltf)$/,
        loader: 'gltf-loader',
        /**
         * @type {import("gltf-loader").GLTFLoaderOptions}
         */
        options: {
          uriResolver: (module) => {
            let result = module.default ?? module
            // Use the "src" property returned by the `next-image-loader` if present:
            if (typeof result === 'object' && 'src' in result) result = result.src
            return result
          },
        },
      },
      {
        test: /\.(bin)$/,
        type: 'asset/resource',
      }
    )

    return config
  },
}
