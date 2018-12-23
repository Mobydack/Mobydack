const merge =  require('webpack-merge');
const mainConfig = requrie('./webpack.config.js');

module.exports = merge(mainConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    module: {

    },
    devServer: {
        hot: true,
    }
});