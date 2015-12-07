var path = require("path"),
  webpack = require("webpack");

module.exports = {
  cache: true,
  entry: "./src/main.js",
  output: {
    filename: "dist/webpack-bundle.js",
    library: "winjsrocks-plugin-storage",
    libraryTarget: "umd"
  },
  node: {
    fs: "empty"
  },
  externals: {
    "winjsrocks": "winjsrocks",
    "winjs": "winjs"
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          optional: ['runtime'],
          stage: 0
        }
      }
    ]
  }
};
