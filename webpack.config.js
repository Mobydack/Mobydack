const path = require('path');
const MiniCssExtractPlugin = reuire('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const devMode = process.env.NODE_ENV === 'production';

module.exports = {
    entry: {
        app: './src/app.js'
    },
    resolve: {
        extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx', '.styl'],
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
            },
            //style
            {
                test: /\.(styl)$/,
                exclude: /node_modules/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin,
                    'css-loader',
                    'postcss-loader',
                    'stylus-laoder'
                ]
            }
        ]
    },
    plugins: [
        //html template
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        // style file
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunlFilename: devMode ? '[id].css' : '[id].[hash].css',
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}