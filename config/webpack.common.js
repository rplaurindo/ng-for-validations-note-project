const { CommonsChunkPlugin } = require('webpack').optimize;
const { AngularCompilerPlugin } = require('@ngtools/webpack');

const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const nodeModules = path.join(process.cwd(), 'node_modules');
const realNodeModules = fs.realpathSync(nodeModules);
const genDirNodeModules = path.join(process.cwd(), 'src', '$$_gendir', 'node_modules');

module.exports = {
    entry: {
        main: ['./src/main.ts'],
        polyfills: ['./src/polyfills.ts']
    },

    resolve: {
        extensions: ['.ts', '.js'],
        modules: ['./node_modules']
    },

    resolveLoader: {
        modules: ['./node_modules'],
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: "raw-loader"
            },
            {
                test: /\.(eot|svg|cur)$/,
                loader: "file-loader",
                options: {
                    name: "[name].[hash:20].[ext]",
                    limit: 10000
                }
            },
            {
                test: /\.(jpg|png|webp|gif|otf|ttf|woff|woff2|ani)$/,
                loader: "url-loader",
                options: {
                    name: "[name].[hash:20].[ext]",
                    limit: 10000
                }
            },
            {
                exclude: [
                    path.join(process.cwd(), "src/styles.css")
                ],
                test: /\.css$/,
                use: [
                    {
                        loader: "raw-loader"
                    }
                ]
            },
            {
                exclude: [
                    path.join(process.cwd(), "src/styles.css")
                ],
                test: /\.styl$/,
                use: [
                    {
                        loader: "raw-loader"
                    },
                    {
                        loader: "stylus-loader",
                        options: {
                            sourceMap: true,
                            paths: []
                        }
                    }
                ]
            },
            {
                include: [
                    path.join(process.cwd(), "src/styles.css")
                ],
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "raw-loader"
                    }
                ]
            },
            {
                include: [
                    path.join(process.cwd(), "src/styles.css")
                ],
                test: /\.styl$/,
                use: [
                    "style-loader",
                    {
                        loader: "raw-loader"
                    },
                    {
                        loader: "stylus-loader",
                        options: {
                            sourceMap: true,
                            paths: []
                        }
                    }
                ]
            },
            {
                test: /\.ts$/,
                loader: "@ngtools/webpack"
            }
        ]
    },

    output: {
        path: path.join(process.cwd(), "dist"),
        filename: "[name].bundle.js",
        chunkFilename: "[id].chunk.js",
        crossOriginLoading: false
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new CommonsChunkPlugin({
            name: [
                "vendor"
            ],
            minChunks: (module) => {
                return module.resource
                    && (module.resource.startsWith(nodeModules)
                        || module.resource.startsWith(genDirNodeModules)
                        || module.resource.startsWith(realNodeModules));
            },
            chunks: [
                "main"
            ]
        }),
        new AngularCompilerPlugin({
            tsConfigPath: "src/tsconfig.app.json",
            skipCodeGeneration: true
        })
    ],
};
