const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const WorkboxPlugin = require('workbox-webpack-plugin');
const ASSET_PATH = process.env.ASSET_PATH || '/';
console.log("当前环境a是：", process.env.ASSET_PATH);

module.exports = {
    entry: {
        index: './src/index.js'
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
        // 该插件帮助我们安心地使用环境变量
        new webpack.DefinePlugin({
            'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
        }),
    ],
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: ASSET_PATH
    }
};