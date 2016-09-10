var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var bootstrapPath = __dirname + '/node_modules/bootstrap/dist/css';
var bootstrapSocialPath = __dirname + '/node_modules/bootstrap-social';
var fontAwesomePath = __dirname + '/node_modules/font-awesome/css';
module.exports = {
  devtool: 'source-map',
  entry: [

    './src/reduxstagram'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': "'production'"
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  // Automatically transform files with these extensions
  resolve: {
    extensions: ['', '.js', '.jsx', '.css'],
    modulesDirectories: ['node_modules', bootstrapPath, bootstrapSocialPath, fontAwesomePath]
  },

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
{ test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=1000000' },
{ test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/, loaders: ["file-loader"] }
    ]
  },
  // Additional plugins for CSS post processing using postcss-loader
postcss: [
  require('autoprefixer'), // Automatically include vendor prefixes
  require('postcss-nested') // Enable nested rules, like in Sass
]
};
