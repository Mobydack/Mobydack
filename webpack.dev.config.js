const merge =  require('webpack-merge');
const mainConfig = require('./webpack.config.js');

module.exports = merge(mainConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    resolve: {
        alias: {
        },
    },
    devServer: {
        hot: true,
        host: '127.0.0.1',
        headers:          { 
            'Access-Control-Allow-Origin': '*'
        },
        https:            false,
        disableHostCheck: true
    }
});