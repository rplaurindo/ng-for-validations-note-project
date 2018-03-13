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
        polyfills: ['./src/polyfills.ts'],
        styles: ['./src/styles.css']
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
                test: /\.ts$/,
                loader: "@ngtools/webpack"
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            // added
            // dependencies raw-loader node-sass sass-loader
            {
                test: /\.scss$|\.sass$/,
                loaders: ['raw-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=assets/[name].[hash].[ext]'
            },
            // {
            //     test: /\.css$/,
            //     exclude: helpers.root('src', 'app'),
            //     loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader?sourceMap' })
            // },
            // {
            //     test: /\.css$/,
            //     include: helpers.root('src', 'app'),
            //     loader: 'raw-loader'
            // }
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
        new CopyWebpackPlugin([
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
        ], {
                ignore: [
                    ".gitkeep",
                    "**/.DS_Store",
                    "**/Thumbs.db"
                ],
                debug: "warning"
            }),
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
