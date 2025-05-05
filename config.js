'use strict'
const rc = require('rc')

const defaultConfig = {
  title: 'Marvelous Markdown Editor - the Most Powerful Markdown Editor ever.',
  description: `Online cloud based HTML5 filled Markdown Editor. Convert HTML to Markdown. 100% FREE!`,
  googleWebmasterMeta: 'DAyGOgtsg8rJpq9VVktKzDkQ1UhXm1FYl8SD47hPkjA',
  keywords: 'Markdown, Editor, ACE, Github, Open Source, Node.js',
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
