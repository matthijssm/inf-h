const path = require('path');
const cwd = require('process').cwd();

module.exports = {
  entry: path.resolve(cwd, 'src', 'index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(cwd, 'dist')
  }
};