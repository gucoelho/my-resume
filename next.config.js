/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false

console.log("isGithubActions", isGithubActions)
let assetPrefix = ''

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
}

console.log("assetPrefix", assetPrefix)

const nextConfig = {
  output: 'export',
  assetPrefix: assetPrefix,
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
