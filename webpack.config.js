const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/app.js'
    },
    resolve: {
        extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx'],
        alias: {
            components: path.resolve(__dirname, 'src/components'),
            compound: path.resolve(__dirname, 'src/components/compound'),
            easy: path.resolve(__dirname, 'src/components/easy'),
            reducers: path.resolve(__dirname, 'src/reducers/')
        },
    },
    module: {
        rules: [
            //babel
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
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