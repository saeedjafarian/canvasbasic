const path = require('path');

module.exports = {
  entry: {
      shape: './src/basic.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'bundler'),
  },
};