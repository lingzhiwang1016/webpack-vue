const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        hotLoad: 'webpack-hot-middleware/client?noInfo=true&reload=true'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {  
                    name: 'vendor',
                    chunks: 'all',
                    test: /[\\/]node_modules[\\/]/
                },
                commons: {
                    name: 'common',
                    chunks: 'all',
                    minChunks: 2
                }
            }
        },
        runtimeChunk: {
            name: "manifest"
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: "css-loader"
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'production'
        }),
        new CleanWebpackPlugin(),
        new ExtractTextPlugin("css/[name].css"),
        new webpack.HashedModuleIdsPlugin(),
        // 将lodash包作为全局变量重新定义
        new webpack.ProvidePlugin({
            _: 'lodash'
        }),
        // 离线服务
        // new WorkboxPlugin.GenerateSW({
        //     // 这些选项帮助 ServiceWorkers 快速启用
        //     // 不允许遗留任何“旧的” ServiceWorkers
        //     clientsClaim: true,
        //     skipWaiting: true
        // })
    ],
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    }
};