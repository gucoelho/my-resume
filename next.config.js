/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
}

const nextConfig = {
  output: 'export',
  assetPrefix: assetPrefix,
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
