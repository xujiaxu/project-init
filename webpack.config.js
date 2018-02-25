const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        app: 'src/index.js'
    },
    output: {
        filename: '[name].[hash:5].js',
        path: 'dist',
        publicPath: ''
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
    ]
};