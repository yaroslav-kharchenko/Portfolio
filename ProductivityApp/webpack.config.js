var path = require("path");
var autoprefixer = require('autoprefixer');
var webpack = require("webpack");

module.exports = {

  context: __dirname,

  entry: {
    vendor: ['firebase','jquery','highcharts'],
    app: './dev/js/app.js'
  },

  output: {
    path: path.resolve(__dirname, "build", "js"),
    publicPath: "/js/",
    filename: '[name].js'
  },

  resolve: {
    modulesDirectories: ['node_modules']
  },

  module: {
    loaders: [
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'file?name=../assets/img/[name].[ext]'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.less$/,
        loader: 'style!css?-url!less'
      },
      {
        test: /\.handlebars$/,
        loader: 'handlebars?helperDirs[]=' + __dirname + '/dev/utils/helpers/'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015']
        }
      },
    ]
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendors.bundle.js')
  ],

  postcss: [
    autoprefixer({ browsers: ['last 2 versions'] })
  ],

  watch: true,

  devtool: 'source-map',

  devServer: {
    contentBase: './build'
  }

};