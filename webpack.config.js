// To build for release: NODE_ENV=production npm run build
const webpack = require('webpack');
const path    = require('path');
const plugins = [];
const env     = process.env.NODE_ENV;

var suffix = '.js',
  devtool = 'inline-source-map';

if (env === 'production') {
  devtool = undefined;
  suffix = '.min.js';
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    mangle: {
      except: ['exports', 'require']
    }
  }));
}

module.exports = {
  devtool: devtool,
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'shartify' + suffix
  },
  module: {
    loaders: [
      // { test: /\.css$/, exclude: /\.useable\.css$/, loader: 'style!css' },
      // { test: /\.useable\.css$/, loader: 'style/useable!css' },
      {
          test: /\.scss$/,
          loaders: [
              'style-loader?insertAt=top',
              'css-loader?modules&importLoaders=1&localIdentName=rst__[local]',
              'postcss-loader',
              'sass-loader',
          ],
          include: path.join(__dirname, 'src')
      },
      {
          test: /\.css$/,
          loaders: [
              'style-loader?insertAt=top',
              'css-loader',
              'postcss-loader',
          ],
      },
      {
          test: /\.(jpe?g|png|gif|ico|svg)$/,
          loaders: [
              'file-loader?name=static/[name].[ext]',
          ],
          include: path.join(__dirname, 'src')
      },
      { test: require.resolve("./src/index.js"), loader: "expose?TaskDirector" },
      { test: /\.less$/, loader: 'css!less' },
      { test: /\.(jade|pug)$/, loader: 'pug' },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: plugins
};
