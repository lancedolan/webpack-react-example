const devConfig = require('./webpack.config.dev.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// change mode
devConfig.mode = 'production'

// unset the "devtool," which is used to provide sourcemaps
delete devConfig.devtool

// Separate css into its own files rather than JS module
    // Replace 'style-loader' with mini-css-extract-plugin
    for (let rule of devConfig.module.rules) {
        let index = -1;
        if (Array.isArray(rule.use) && (index = rule.use.indexOf('style-loader')) > -1) {
            rule.use.splice(index, 1, MiniCssExtractPlugin.loader)
        }
    }
    // add the plugin
    devConfig.plugins = devConfig.plugins.concat(new MiniCssExtractPlugin())

module.exports = devConfig