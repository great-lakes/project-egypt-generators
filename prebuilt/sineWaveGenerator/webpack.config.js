const path = require('path')

module.exports = {
  entry: 'sineGenerator.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
}
