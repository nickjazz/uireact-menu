const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractCore = new ExtractTextPlugin('uireact-menu.css');
const extractTheme = new ExtractTextPlugin('[name].css');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
         test:/\.css$/,
         use: extractCore.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
         test:/\.scss$/,
         use: extractTheme.extract({
           fallback: "style-loader",
           use: ["css-loader", "sass-loader"]
        })
      }
    ]
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
      umd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom',
    },
  },
  plugins: [
    // new BundleAnalyzerPlugin({
    //   analyzerMode: 'static',
    //   reportFilename: './reports-index.html',
    //   openAnalyzer: true
    // }),
    new UglifyJsPlugin(),
    extractCore,
    extractTheme
  ]
};
