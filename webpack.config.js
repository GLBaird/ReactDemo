const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'app.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name]_[hash].js'
    },
    module : {
        rules : [
            {
                test : /\.jsx?$/,
                exclude: /node_modules/,
                loader : 'babel-loader'
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Welcome to React'
    })]
};