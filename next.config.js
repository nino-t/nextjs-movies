module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/browse',
        permanent: true,
      },
    ]
  },
}