const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OpenBrowserPlugin = require("open-browser-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ParallelUglifyPlugin = require("webpack-parallel-uglify-plugin");

let webpackConfig = {
  entry: {
    app: "./app.js"
  },
  output: {
    filename: "js/[name].js",
    path: path.join(__dirname, "dist"),
    chunkFilename: "js/[name].js"
  },
  resolve: {
    extensions: [".jsx", ".js", ".json"],
    alias: {
      "@component": path.resolve(__dirname, "./app/component"),
      "@common": path.resolve(__dirname, "./app/assets/common")
    }
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.less$/,
        loader: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.css/,
        loaders: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg)$/,
        loader: "url-loader?limit=8192"
      },
      {
        test: /\.(woff|eot|ttf|svg)(\?.*)?$/,
        loader: "file-loader"
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("css/[name].css"),
    // new webpack.DefinePlugin({
    //     "process.env": {
    //        NODE_ENV: JSON.stringify("production")
    //      }
    // }),
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.optimization.splitChunks({name: 'vendor', filename: 'vendor.bundle.js'}),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./index.html"),
      filename: "index.html",
      favicon: "./favicon.ico"
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: Infinity
    }),
    new webpack.optimize.CommonsChunkPlugin({
      async: true,
      minChunks: 3
    }),

    new ParallelUglifyPlugin({
      cacheDir: ".cache/",
      uglifyJS: {
        output: {
          comments: false
        },
        compress: {
          warnings: false
        }
      }
    })
  ]
};

module.exports = webpackConfig;
