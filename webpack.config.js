const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CopyPlugin = require("copy-webpack-plugin");



module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['ts-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack', 'url-loader'],
            },
            {
                test: /\.(jpe?g|png|webp)$/i,
                include: [
                    path.resolve(__dirname, "public/portfolio_elements/design_tools")
                ],
                use: {
                    loader: 'responsive-loader',
                    options: {
                        adapter: require('responsive-loader/sharp'),
                        sizes: [128]
                    }
                }
            },
            {
                test: /\.(jpe?g|png|webp)$/i,
                exclude:[
                    path.resolve(__dirname, "public/portfolio_elements/design_tools"),
                    path.resolve(__dirname, "public/favicon")
                ],
                use: {
                    loader: 'responsive-loader',
                    options: {
                        adapter: require('responsive-loader/sharp'),
                        sizes: [512, 800, 1280]
                    }
                }
            },
            {
                test: /\.(svg|gif|ico|png)$/,
                exclude: /node_modules/,
                use: ['file-loader?name=[name].[ext]']
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            filename: 'index.html',
            title: "Portfolio Anastasiia Sokhina",
            meta: {
                description: "Un site pour présenter mon portfolio",
                viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
                charset: 'utf-8',
            },
            favicon: "./public/favicon/favicon.ico"

        }),
        new CopyPlugin({
            patterns: [
                { from: "public/manifest.json", to: "" },
                { from: "public/cv_anastasiia_sokhina.pdf", to: "" }
            ],
        })
    ],
    devServer: {
        historyApiFallback: true
    }
}