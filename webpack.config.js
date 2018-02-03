var webpack = require('webpack');


module.exports = {
    entry: {
        site: "./source/javascripts/site.js",
        vendor: [
            "jquery",
            "TweenMax"
        ]
    },

    output: {
        filename: "javascripts/[name].js",
        path: __dirname + '/.tmp/dist'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [
                    "extract-text-webpack-plugin",
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                    {
                    loader: "post-css",
                        options: {
                            to: ".tmp/dist/stylesheets/site.css",
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            "jquery": __dirname + '/node_modules/jquery/dist/jquery.js',
            "TweenMax": __dirname + '/node_modules/gsap/src/uncompressed/TweenMax'
        }
    }
};
