/*
 * @Author: dontry
 * @Date:   2016-04-15 11:56:16
 * @Last Modified by:   dontry
 * @Last Modified time: 2016-05-10 14:44:36
 */
var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CommonsPlugin = webpack.optimize.CommonsChunkPlugin;

// function getEntrySources(sources) {
//     if (process.env.NODE_ENV !== 'production') {
//         sources.push('webpack-dev-server/client?http://localhost:8080');
//     }
//     return sources;
// }

module.exports = {
    devtool: 'cheap-eval-source-map',
    entry: {
         vendor: ['bootstrap','mockjs', 'mustache','backbone'],
        index: ['webpack-dev-server/client?http://locoalhost:8080',
            'webpack/hot/dev-server',
            './entry1'
        ],
        player: ['webpack-dev-server/client?http://locoalhost:8080',
            'webpack/hot/dev-server',
            './entry2'
        ]
    },
    ouput: {
        path: path.join(__dirname, 'dist/src'),
        filename: '[name].js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CommonsPlugin({
            name: 'vendor',
            filename: 'vendor.js',
            minChunks: Infinity
        }),
          new htmlWebpackPlugin({
            template: './html/index.html',
            filename: 'index.html',
            title: '法院直播平台首页',
            chunks: ['vendor','index'],
            cache: true
        }),
        new htmlWebpackPlugin({
            template: './html/player.html',
            filename: 'player.html',
            title: '视频播放',
            chunks: ['vendor','player'],
            cache: true
        }),
        new ExtractTextPlugin('style[id].css', {
            allChunks: true
        }),
         new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            _: 'underscore',
        })
    ],
    module: {
        loaders: [{
            test: /\.css$/,
            // loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.(png|jpg|jpeg|gif)$/,
            loader: 'url-loader?limit=12000'
        }, {
            test: /\.(woff|woff2|eot|svg|ttf)/,
            loader: 'url-loader?limit=12000&minetype=application/font'
        }, {
            test: require.resolve('jquery'),
            loader: 'expose?jQuery'
        },{
            test: require.resolve('underscore'),
            loader: 'expose?underscore'
        },]
    },
    devServer: {
        contentBase: './dist',
        hot: true,
        inline: true,
        progress: true
    }
};
