const { NoEmitOnErrorsPlugin, NamedModulesPlugin } = require('webpack');
const { NamedLazyChunksWebpackPlugin, BaseHrefWebpackPlugin, PostcssCliResources } = require('@angular/cli/plugins/webpack');
const { CommonsChunkPlugin } = require('webpack').optimize;
const { AngularCompilerPlugin } = require('@ngtools/webpack');

const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

const helpers = require('./helpers');

const entryPoints = ["inline", "polyfills", "sw-register", "styles", "vendor", "main"];

const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const projectRoot = process.cwd();
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
        new NoEmitOnErrorsPlugin(),
        new CopyWebpackPlugin(
            [
                {
                    context: "src",
                    to: "",
                    from: {
                        glob: "assets/**/*",
                        dot: true
                    }
                },
                {
                    context: "src",
                    to: "",
                    from: {
                        glob: "favicon.ico",
                        dot: true
                    }
                }
            ],
            {
                ignore: [
                    ".gitkeep",
                    "**/.DS_Store",
                    "**/Thumbs.db"
                ],
                debug: "warning"
            }
        ),
        new ProgressPlugin(),
        new CircularDependencyPlugin({
            exclude: /(\\|\/)node_modules(\\|\/)/,
            failOnError: false,
            onDetected: false,
            cwd: projectRoot
        }),
        new NamedLazyChunksWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
            hash: false,
            inject: true,
            compile: true,
            favicon: false,
            minify: false,
            cache: true,
            showErrors: true,
            chunks: "all",
            excludeChunks: [],
            title: "Webpack App",
            xhtml: true,
            chunksSortMode: function sort(left, right) {
                let leftIndex = entryPoints.indexOf(left.names[0]);
                let rightIndex = entryPoints.indexOf(right.names[0]);
                if (leftIndex > rightIndex) {
                    return 1;
                }
                else if (leftIndex < rightIndex) {
                    return -1;
                }
                else {
                    return 0;
                }
            }
        }),
        new BaseHrefWebpackPlugin({}),
        new CommonsChunkPlugin({
            name: [
                "inline"
            ],
            minChunks: null
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
        new CommonsChunkPlugin({
            name: [
                "main"
            ],
            minChunks: 2,
            async: "common"
        }),
        new NamedModulesPlugin({}),
        new AngularCompilerPlugin({
            mainPath: "main.ts",
            platform: 0,
            hostReplacementPaths: {
                "environments/environment.ts": "environments/environment.ts"
            },
            sourceMap: true,
            tsConfigPath: "src/tsconfig.app.json",
            skipCodeGeneration: true,
            compilerOptions: {}
        })
    ],
};
