module.exports = {
  lintOnSave: false,
  publicPath: '/',
  outputDir: process.env.NODE_ENV === 'production' ? '/var/www/events-app/client' : 'dist'
}
