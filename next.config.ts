import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    // Find existing SVG rule
    const fileLoaderRule = config.module.rules.find((rule: any) =>
      rule.test?.test?.('.svg')
    )

    config.module.rules.push(
      // Reapply existing rule for SVG URLs
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      // Convert other SVGs to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgoConfig: {
                plugins: [
                  {
                    name: 'preset-default',
                    params: {
                      overrides: {
                        removeViewBox: false,
                        cleanupIds: false,
                      },
                    },
                  },
                ],
              },
            },
          },
        ],
      }
    )

    // Exclude SVGs from file loader
    fileLoaderRule.exclude = /\.svg$/i

    return config
  },
};

export default nextConfig;
