const path = require('path');

module.exports = {
  entry: {
      shape: './src/shape.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'bundler'),
  },
};