const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require("webpack-Hot-middleware")

const app = express();

const devConfig = require('../webpack.dev.js');
const proConfig = require('../webpack.prod.js');
const isDev = process.env.NODE_ENV !== 'production';
const config = isDev ? devConfig:proConfig;
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));
// 实现热加载
app.use(webpackHotMiddleware(compiler));

// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});
