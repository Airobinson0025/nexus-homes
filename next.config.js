/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  env: {
    mapbox_key: 'pk.eyJ1IjoiYWlyb2JpbnNvbjAwMjUiLCJhIjoiY2xlOHEydHJzMGhyNDNxbnY0Z29mdzUxZCJ9.W_ZgHS-Q2ShX-pBrqn5iMQ'
  }
}


module.exports = nextConfig
