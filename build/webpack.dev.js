 
const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
 const common = require('./webpack.common.js');

 module.exports = merge(common, {
    mode: "development",
    devtool: 'inline-source-map',
    plugins: [
        // 热加载
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    output: {
        filename: 'js/[name].[hash].js',
        chunkFilename: 'js/[name].[hash].js'
    }
 });