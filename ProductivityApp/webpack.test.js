var path = require('path');
var webpack = require('webpack');

module.exports = function(_path) {
  return {
    cache: true,
    devtool: 'inline-source-map',
    resolve: {
      extensions: ['', '.js'],
      modulesDirectories: ['node_modules']
    },
    module: {
      preLoaders: [
        {
          test: /.spec\.js$/,
          include: /dev/,
          exclude: /(node_modules)/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015'],
            cacheDirectory: true,
          }
        },
        {
          test: /\.js?$/,
          include: /dev/,
          exclude: /(node_modules|__tests__)/,
          loader: 'babel-istanbul',
          query: {
            cacheDirectory: true,
          },
        },
      ],
      loaders: [
        // es6 loader
        {
          include: path.join(_path, 'dev'),
          loader: 'babel-loader',
          exclude: /(node_modules|__tests__)/,
          query: {
            presets: ['es2015'],
            cacheDirectory: true,
          }
        },
        // external files loader
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
        }
      ],
    },
  };
};