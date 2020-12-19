const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

const babelRule = {
  test: /\.js$/,
  exclude: path.resolve(__dirname,'node_modules'),
  use: {
    loader: 'babel-loader',
    options:{
      presets:[
        '@babel/preset-env',
        '@babel/preset-react'
      ]
    }
  }
}

const cssRule = {
  test: /\.css/i,
  use: ['style-loader', 'css-loader']
}

const fileLoaderRule = {
  test: /\.(svg|png|jpe?g|gif)$/i,
  use: ['file-loader']
}

module.exports = {
  entry: [
    './src/index.js',
    '@babel/polyfill'
  ],
  module:{
    rules:[
      babelRule,
      cssRule,
      fileLoaderRule
    ]
  },
  plugins: [new HTMLWebpackPlugin({template: './src/index.html'})],
  devtool: 'source-map',
  watch: true,
  devServer: {
    open: true
  }
}