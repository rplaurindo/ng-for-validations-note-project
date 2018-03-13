const { SourceMapDevToolPlugin } = require('webpack');

const webpackMerge = require('webpack-merge');
const path = require('path');

const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {

    devServer: {
        historyApiFallback: true
    },

    entry: {
        styles: ['./src/styles.sass']
    },

    module: {
        rules: [
            {
                "include": [
                    path.join(process.cwd(), "src/styles.scss"),
                    path.join(process.cwd(), "src/styles.sass")
                ],
                "test": /\.(scss|sass)$/,
                "use": [
                    "style-loader",
                    {
                        "loader": "raw-loader"
                    },
                    {
                        "loader": "sass-loader",
                        "options": {
                            "sourceMap": true,
                            "precision": 8,
                            "includePaths": []
                        }
                    }
                ]
            },
            {
                "exclude": [
                    path.join(process.cwd(), "src/styles.scss"),
                    path.join(process.cwd(), "src/styles.sass")
                ],
                "test": /\.(scss|sass)$/,
                "use": [
                    {
                        "loader": "raw-loader"
                    },
                    {
                        "loader": "sass-loader",
                        "options": {
                            "sourceMap": true,
                            "precision": 8,
                            "includePaths": []
                        }
                    }
                ]
            }
        ]
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