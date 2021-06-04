const webpackBase = require("./webpack.base.config")
const merge = require("webpack-merge")
const resolve = require("path").resolve
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const WebpackPwaManifest = require('webpack-pwa-manifest')
const { HashedModuleIdsPlugin } = require('webpack')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = merge(webpackBase, {
    mode: 'production',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.s?css$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader', 
                        options: {
                            config: {
                                path: resolve(__dirname, 'postcss.config')
                            }
                        }
                    }, 
                    'sass-loader'
                ]
            }
        ]
    }, 
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    warnings: false,
                    compress: {
                        comparisons: false,
                    },
                    parse: {},
                    mangle: true,
                    output: {
                        comments: false,
                        ascii_only: true,
                    },
                },
                parallel: true,
                cache: true,
                sourceMap: true,
            }), new OptimizeCSSAssetsPlugin()
        ],
        nodeEnv: 'production',
        sideEffects: true,
        concatenateModules: true,
        splitChunks: {
            chunks: 'all',
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: true,
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                },
                main: {
                    chunks: 'all',
                    minChunks: 2,
                    reuseExistingChunk: true,
                    enforce: true,
                },
            },
        },
        runtimeChunk: true
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].[hash].css',
            chunkFilename: 'assets/css/[id].[hash].css'
        }),
        new WebpackPwaManifest({
            name: 'React Boilerplate',
            short_name: 'React BP',
            description: 'My React Boilerplate-based project!',
            background_color: '#fafafa',
            theme_color: '#b1624d',
            inject: true,
            ios: true,
        }),
        new HashedModuleIdsPlugin({
            hashFunction: 'sha256',
            hashDigest: 'hex',
            hashDigestLength: 20,
        }),
        new CompressionPlugin({
            algorithm: 'gzip',
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8,
        })
    ],
    performance: {
        assetFilter: assetFilename => !/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename)
    }
})