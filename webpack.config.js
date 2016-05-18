/*
 * @Author: dontry
 * @Date:   2016-04-15 11:56:16
 * @Last Modified by:   dontry
 * @Last Modified time: 2016-04-15 13:51:00
 */
var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/dev-server',
        './entry'],
    ouput: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
            },
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new htmlWebpackPlugin({
            template: './html/index.html'
        })
    ],
    module: {
        loaders: [{
            test: /\.csss$/,
            loaders: ['style', 'css']
        }]
    }
};
