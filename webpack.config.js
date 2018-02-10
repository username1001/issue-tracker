const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    app: './src/App.jsx',
    vendor: [
      'react',
      'react-dom',
      'whatwg-fetch',
      'babel-polyfill',
      'react-router',
      'react-bootstrap',
      'react-router-bootstrap'
    ]
  },
  output: {
    path: path.join(__dirname, './static'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js'
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  devServer: {
    port: 8000,
    contentBase: 'static',
    proxy: {
      '/api/*': {
        target: 'http://localhost:3000'
      },
      historyApiFallback: true
    }
  },
  devtool: 'source-map'
};
