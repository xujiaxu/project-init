const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    entry: {
        app: './demo/index.js'
    },
    output: {
        filename: '[name].[hash:5].js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/public',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],
    devServer: {
        port: '8080',
        host: 'localhost',
        contentBase: path.join(__dirname, 'dist'),
        publicPath: '/public',
        historyApiFallback: {
            index: '/public/index.html'
        }
    }
};