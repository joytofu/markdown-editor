'use strict'
const rc = require('rc')

const defaultConfig = {
  title: 'TopMD - Edit, View & Convert Markdown Online (MD to PDF/HTML).',
  description: `Your all-in-one online markdown viewer and editor. Convert markdown to pdf online or convert markdown to html with just a click. Try our markdown split view today!`,
  googleWebmasterMeta: 'DAyGOgtsg8rJpq9VVktKzDkQ1UhXm1FYl8SD47hPkjA',
  keywords: 'markdown to pdf, md to pdf, best markdown editor, convert markdown to html, online markdown viewer, markdown split view',
  author: 'Raymond Jaden',
  // Add default database configuration
  development: {
    port: process.env.PORT || 8080,
    db: {
      mongodb: process.env.MONGODB_URI || 'mongodb://localhost:27017/dillinger',
      redis: process.env.REDIS_URL || 'redis://localhost:6379'
    }
  }
}

// Export a function that returns the configuration
module.exports = function() {
  return rc('dillinger', defaultConfig)
}
