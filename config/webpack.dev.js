const webpackMerge = require('webpack-merge');
const path = require('path');

const commonConfig = require('./webpack.common.js');

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
                include: [
                    path.join(process.cwd(), "src/styles.scss"),
                    path.join(process.cwd(), "src/styles.sass")
                ],
                test: /\.(scss|sass)$/,
                use: [
                    "style-loader",
                    {
                        loader: "raw-loader"
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                            precision: 8,
                            includePaths: []
                        }
                    }
                ]
            },
            {
                exclude: [
                    path.join(process.cwd(), "src/styles.scss"),
                    path.join(process.cwd(), "src/styles.sass")
                ],
                test: /\.(scss|sass)$/,
                use: [
                    {
                        loader: "raw-loader"
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                            precision: 8,
                            includePaths: []
                        }
                    }
                ]
            }
        ]
    }

});
