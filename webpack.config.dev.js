var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    "webpack-dev-server/client?http://localhost:7770",
    "webpack/hot/only-dev-server",
  //  'webpack-hot-middleware/client',
    './src/reduxstagram'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:9090/dist/'
  },




  plugins: [

    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  new ExtractTextPlugin('style.css', { allChunks: true })
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
        loaders: ["react-hot", "babel-loader"] },

    // js
    {
      test: /\.js$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/,
      include: path.join(__dirname, 'src')
    },
    // CSS
    {
      test: /\.styl$/,
      include: path.join(__dirname, 'src'),
      loader: 'style!css!less'
    },
    { test: /\.css$/, loader: "style!css" },

    { test: /\.less$/, loader: 'style!css!less' },
{ test: /\.scss$/, loader: 'style!css!sass' },
{ test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
{ test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/, loaders: ["file-loader"] }
    ]
  }
};
