const merge = require("webpack-merge")
const webpack = require("webpack")
const resolve = require("path").resolve
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const StyleLintPlugin = require('stylelint-webpack-plugin')
const webpackBase = require("./webpack.base.config")

module.exports = merge(webpackBase, {
    mode: 'development',
    devtool: 'cheap-eval-source-map',
    module: {
        rules: [
            {
                test: /\.s?css$/,
                exclude: /node_modules/,
                use: [ 'style-loader', 'css-hot-loader', MiniCssExtractPlugin.loader,'css-loader', 'sass-loader' ]
            }
        ]
    },
    devServer: {
        contentBase: resolve(__dirname, "../dist"),
        historyApiFallback: true,
        inline: true,
        hot: true,
        host: 'localhost', // Your ip address
        port: 3030,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "styles.css"
        }),
        new StyleLintPlugin({
            configFile: '.stylelintrc.js',
            context: 'src',
            files: '**/*.scss',
            failOnError: false,
            quiet: false,
        }),
        new webpack.NamedModulesPlugin()
    ],
    performance: {
        hints: false
    }
})
