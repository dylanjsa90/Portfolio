'use strict';

// const webpack = require('webpack');
const ExtractText = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

let plugins = [
  new ExtractText('bundle.css'),
];

module.exports = {
  entry: `${__dirname}/app/entry.js`,
  plugins: plugins,
  output: {
    path: 'docs',
    filename: 'bundle.js'
  },
  postcss: function() {
    return [autoprefixer];
  },
  sassLoader: {
    includePaths: [`${__dirname}/app/scss/lib`]
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractText.extract('style', 'css!postcss!sass!'),
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015'],
        },
      },
      {
        test: /\.html$/,
        loader: 'html',
        exclude: '/node_modules'
      },
      {
        test: /\.(jpg|gif|png)$/,
        loader: 'file?name=image/[hash]-[name].[ext]',
      },
      {
        test: /\.(woff|svg|eot|ttf).*/,
        loader: 'url?limit=10000&name=font/[name].[ext]',
      }
    ],
  }
};