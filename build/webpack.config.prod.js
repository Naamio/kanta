const webpack = require('webpack');
const uglifyJs = require('webpack/lib/optimize/UglifyJsPlugin');

const config = require('./webpack.config.base');
const path = require('path');

config.devtool = '#source-map';

config.plugins = (config.plugins || []).concat([
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }),
    new uglifyJs({
        compress: {
            warnings: false
        },
        include: /\.js$/,
        minimize: true,
        sourceMap: true
    }),
    new webpack.LoaderOptionsPlugin({
        minimize: true
    })
]);

module.exports = config;
