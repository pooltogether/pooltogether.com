/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const { i18n } = require('./next-i18next.config');
const chalk = require("chalk")
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/prizes',
        destination: '/prizes/PT-cDAI',
        permanent: true,
      },
      {
        source: '/pool-party',
        destination: '/pool-party/season1',
        permanent: false,
      }
    ]
  },
  i18n
}

module.exports = withBundleAnalyzer(nextConfig)

