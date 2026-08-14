/** @type {import('next').NextConfig} */
import fs from 'fs'
import path from 'path'

const isProd = process.env.NODE_ENV === 'production'
const envSuffix = isProd ? '' : `_${process.env.NODE_ENV}`

/**
 * Load runtime config from JSON file.
 * Falls back to empty object if file is missing or invalid.
 */
function loadRuntimeConfig() {
  const filePath = path.join(process.cwd(), `config_transitions${envSuffix}.json`)
  try {
    const raw = fs.readFileSync(filePath, 'utf8')
    const runtimeConfig = JSON.parse(raw)
    console.log(runtimeConfig)

    return runtimeConfig
  } catch (err) {
    console.warn(`[config] Missing or invalid config file: ${filePath}`)
    return {}
  }
}

const runtimeConfig = loadRuntimeConfig()

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  poweredByHeader: false,

  compiler: {
    removeConsole: isProd ? { exclude: ['error'] } : false,
  },

  webpack: config => {
    const fileLoaderRule = config.module.rules.find(rule => rule.test?.test?.('.svg'))

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: ['@svgr/webpack'],
      }
    )

    fileLoaderRule.exclude = /\.svg$/i

    return config
  },

  env: {
    ...runtimeConfig,
  },
}

export default nextConfig
