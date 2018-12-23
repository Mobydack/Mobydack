const merge = require('webpack-merge');
const mainConfig = require('./webpack.config.js');
module.axports = merge(mainConfig, {
    mode: 'production'
})