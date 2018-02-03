var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        site: "./source/javascripts/site.js",
        slicklightbox: "./source/javascripts/slick-lightbox.min.js",
        vendor: [
            "jquery",
            "gsap/TweenMax",
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
                        "sass-loader"
                    ]
                })
            },
            { 
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "stylesheets/[name].css"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor"
        })
    ]
}