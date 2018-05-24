const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let webpackConfig = {
    entry: {
        app: './app.js'
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
        chunkFilename: '[name].js'
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json'],
        alias: {}
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.less$/,
                loader: ['style-loader','css-loader', 'less-loader'],
            }, 
            {
                test: /\.css/,
                loaders: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        modules: true
                    }
                }]
            }, 
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192',
            },
            {
                test: /\.(woff|eot|ttf|svg)(\?.*)?$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        // new webpack.DefinePlugin({
        //     "process.env": { 
        //        NODE_ENV: JSON.stringify("production") 
        //      }
        // }),
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.optimization.splitChunks({name: 'vendor', filename: 'vendor.bundle.js'}),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './index.html'),
        }),
        new ExtractTextPlugin('app/assets/icon/iconfont.css')
        // new OpenBrowserPlugin({
        //     url: 'http://127.0.0.1:8000'
        // }),
    ],
    devServer: {
        historyApiFallback: true,
        hot: true,
        open: true,
        // proxy: casProxy(),
        host: '127.0.0.1',
        port: '8088'
    },
    mode: 'development'
}

module.exports = webpackConfig