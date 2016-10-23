var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var CssLoader = ExtractTextPlugin.extract("style",'css?-minimize!sass?pretty=true');

module.exports = {
  entry: [
    './app/index.js',
    'file?name=index.html!jade-html?pretty=true!./server/views/index.jade',
   ],
  output: {
    path: __dirname + '/public/',
    filename: "index.js"
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: CssLoader
      },
      { 
        test: /\.hbs$/,
        loader: "handlebars-loader"
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("index.css"),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['public'] },
      // ghostMode: {
      //   clicks: false,
      //   forms: false,
      //   scroll: false
      // }
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      "_": "underscore",
      Backbone: 'backbone',
      Marionette: 'backbone.marionette',
      materialize: 'materialize-css'
    })
  ]
};
