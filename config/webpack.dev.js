const { SourceMapDevToolPlugin } = require('webpack');

const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {

    devServer: {
        historyApiFallback: true
    },

    plugins: [
        new SourceMapDevToolPlugin({
            filename: "[file].map[query]",
            moduleFilenameTemplate: "[resource-path]",
            fallbackModuleFilenameTemplate: "[resource-path]?[hash]",
            sourceRoot: "webpack:///"
        }),
    ]
});