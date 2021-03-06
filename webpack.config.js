var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
    entry: {
        site: "./source/javascripts/site.js",
        vendor: [
            "jquery",
            "TweenMax",
        ]
    },
    output: {
        filename: "javascripts/[name].js",
        path: __dirname + '/.tmp/dist'
    },
    module: {
        rules: [
            {
                test: /\.(scss|sass)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        "css-loader",
                    ],
                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    resolve: {
        alias: {
            "jquery": __dirname + '/node_modules/jquery/dist/jquery.js',
            "TweenMax": __dirname + '/node_modules/gsap/src/uncompressed/TweenMax.js',

            
        }
      },
    plugins: [
        new ExtractTextPlugin({
            filename: "stylesheets/[name].css"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor"
        }),

        new UglifyJSPlugin({
            compress: { warnings: false }
        }),
    ]
};