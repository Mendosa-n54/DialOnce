const resolve = require("path").resolve
const webpack = require('webpack')
const WebpackBar = require('webpackbar')
const WebappWebpackPlugin = require('webapp-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    context: __dirname,
    target: 'web',
    entry: resolve(__dirname, '../src/index.js'),
    output: {
        publicPath: "/",
        path: resolve(__dirname, '../dist'),
        filename: 'assets/js/[name].[hash].js',
        chunkFilename: 'assets/js/[name].[hash].chunk.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query:
                {
                    presets:['@babel/preset-react']
                }
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            limit: 10 * 1024,
                            noquotes: true,
                            name: 'assets/svgs/[hash]-[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options:{
                            limit: 10 * 1024,
                            name: 'assets/images/[hash]-[name].[ext]',
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options:{
                            mozjpeg: {
                                enabled: false,
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            optipng: {
                                optimizationLevel: 7,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4,
                            },
                        }
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'assets/fonts/[hash]-[name].[ext]',
                    }
                }]
            },
            {
                test: /\.(mp4|webm)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                    },
                },
            },
            {
                test: /\.html$/,
                use: 'html-loader',
            },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        }),
        new HtmlWebpackPlugin({
            template: resolve(__dirname, '../src/template/index.html'),
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
            inject: "force",
            hash: true,
            filename: "index.html"
        }),
        new WebappWebpackPlugin({
            logo: resolve(__dirname, '../src/assets/images/dialonce-logo.png'),
            prefix: 'assets/',
            cache: false,
            inject: "force",
            favicons: {
                icons: {
                    android: true, // From false to true
                    appleIcon: true, // From false to true
                    appleStartup: true, // From false to true
                    coast: true, // From false to true
                    favicons: true,
                    firefox: true, // From false to true
                    opengraph: true, // From false to true
                    twitter: true, // From false to true
                    yandex: true, // From false to true
                    windows: true // From false to true
                }
            }
        }),
        new WebpackBar()
    ]
}
