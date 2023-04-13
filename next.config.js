/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = isGithubActions ? '/' : ''
let basePath = ''

const nextConfig = {
  output: 'export',
  assetPrefix: assetPrefix,
  basePath: basePath,
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
