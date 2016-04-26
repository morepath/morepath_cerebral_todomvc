var path = require('path');
var src = path.resolve(__dirname, 'client');
var dist = path.resolve(__dirname, 'static');

module.exports = {
  entry: path.resolve(src, 'main.js'),
  devtool: 'source-map',
  output: {
    path: dist,
    filename: 'todomvc.js'
  },
  module: {
    loaders: [{
      test: /\.css?$/,
      loader: 'style!css'
    },
    {
      test: /\.js?$/,
      include: src,
      loader: 'babel',
      query: {
        cacheDirectory: true,
        "presets": ["react", "es2015", "stage-0"],
        "plugins": ["transform-decorators-legacy"]
      }

    }]
  },
};
