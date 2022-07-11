"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var path_1 = __importDefault(require("path"));
var react_refresh_webpack_plugin_1 = __importDefault(require("@pmmmwh/react-refresh-webpack-plugin"));
var fork_ts_checker_webpack_plugin_1 = __importDefault(require("fork-ts-checker-webpack-plugin"));
var config = {
    name: "word-relay-dev",
    mode: "development",
    devtool: "eval",
    resolve: {
        extensions: [".js", ".jsx", ".tsx", ".ts"]
    },
    entry: {
        app: "./client"
    },
    module: {
        rules: [
            {
                loader: "babel-loader",
                options: { plugins: ["react-refresh/babel"] }
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: path_1["default"].join(__dirname, "node_modules")
            },
        ]
    },
    plugins: [new react_refresh_webpack_plugin_1["default"](), new fork_ts_checker_webpack_plugin_1["default"]()],
    output: {
        path: path_1["default"].join(__dirname, "dist"),
        filename: "[name].js",
        publicPath: "/dist/"
    },
    devServer: {
        devMiddleware: { publicPath: "/dist" },
        static: { directory: path_1["default"].resolve(__dirname) },
        hot: true
    }
};
exports["default"] = config;
