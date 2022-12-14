const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { Module } = require('module');
const { mainModule } = require('process');
const { resolve } = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
       path: path.resolve(__dirname, 'dist'),
       filename: 'main.js'
    },
    resolve: {
        extensions:['.js']
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename: './index.html'
        })
    ]

}
