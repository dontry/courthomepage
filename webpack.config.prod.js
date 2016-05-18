var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CommonsPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
    devtool: 'source-map',
    entry: {
        vendor: ['bootstrap','mockjs', 'mustache','backbone'],
        index: './entry1'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //     compressor: {
        //         warnings: false,
        //     },
        // }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new CommonsPlugin({
            name: 'vendor',
            filename: 'js/vendor.js',
            minChunks: Infinity
        }),
        new htmlWebpackPlugin({
            template: './html/index.html',
            filename: 'index.html',
            title: '法院直播平台首页',
            chunks: ['vendor','index'],
            cache: true
        }),
        new ExtractTextPlugin('css/[name].css', {
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
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            test: require.resolve('jquery'),
            loader: 'expose?jQuery'
        },{
            test: require.resolve('underscore'),
            loader: 'expose?underscore'
        },{
            test: /\.(png|jpg|jpeg|gif)$/,
            loader: 'url-loader?limit=12000'
        }, {
            test: /\.(woff|woff2|eot|svg|ttf)/,
            loader: 'url-loader?limit=10000&minetype=application/font'
        }
        ]
    }
};
