import type { StorybookConfig } from '@storybook/nextjs'
import path from 'path'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-onboarding',
    'storybook-css-modules',
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
  ],

  webpackFinal: async config => {
    config.module = config.module || {}
    config.resolve = config.resolve || {}
    config.module.rules = config.module.rules || []

    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      dns: false,
      tls: false,
    } // fix for i18next

    config.resolve.alias = {
      ...config.resolve.alias,
      '@/': path.resolve('./src/*'),
      '@/assets': path.resolve('./src/assets'),
      '@/components': path.resolve('./src/components'),
      '@/platform': path.resolve('./src/platform'),
      '@/widgets': path.resolve('./src/widgets'),
      '@/configs': path.resolve('./src/configs'),
      '@/providers': path.resolve('./src/providers'),
      '@/lib': path.resolve('./src/lib'),
      '@/utils': path.resolve('./src/utils'),
      '@/themes': path.resolve('./src/themes'),
      '@/middleware': path.resolve('./src/middleware.ts'),
      '@/hooks': path.resolve('./src/hooks'),
      '@/typesApp': path.resolve('./src/types'),
      '@/constants': path.resolve('./src/constants'),
      '@/foundation': path.resolve('./src/foundation'),
      '@/features': path.resolve('./src/features'),
      '@/pages_views': path.resolve('./src/pages_views'),
      '@/redux': path.resolve('./src/redux'),
      '@/services': path.resolve('./src/services'),
      '@/layouts': path.resolve('./src/layouts'),
      '@/styles': path.resolve('./src/styles'),
    }

    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, '../'),
    ]

    config.module.rules.push({
      test: /\.json$/,
      loader: 'json-loader',
      type: 'javascript/auto',
    })

    // This modifies the existing image rule to exclude .svg files
    // since you want to handle those files with @svgr/webpack
    const imageRule = config.module.rules.find(rule => rule?.['test']?.test('.svg'))
    if (imageRule) {
      imageRule['exclude'] = /\.svg$/
    }

    // Configure .svg files to be loaded with @svgr/webpack
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },

  framework: {
    name: '@storybook/nextjs',
    options: {},
  },

  docs: {},

  staticDirs: ['../public'],

  env: config => ({
    ...config,
  }),

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
}
export default config
