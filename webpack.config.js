const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  node: {
    fs: 'empty'
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'static')
  }
}
