const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/app.js'
    },
    module: {

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}