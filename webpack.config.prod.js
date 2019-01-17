const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OpenBrowserPlugin = require("open-browser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
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
  optimization: {
    splitChunks: {
      minSize: 1,
      chunks: "initial",
      name: "vendor"
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "[id].css"
    }),
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.optimization.splitChunks({name: 'vendor', filename: 'vendor.bundle.js'}),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./index.html"),
      filename: "index.html",
      favicon: "./favicon.ico",
      chunks: ["vendor", "app"]
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
  ],

  mode: "none"
};

module.exports = webpackConfig;
