const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[hash].js',
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                title: 'My html',
                template: 'src/assets/index.html'
            }
        ),
    ],
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.styl$/,
                loader: ["style-loader", "css-loader", "stylus-loader"],
            },
            {
                test: /\.less$/i,
                loader: ['style-loader', 'css-loader', 'less-loader'],
            },
            {

                test: /\.scss$/i,
                use: [
                    // 将 JS 字符串生成为 style 节点
                    'style-loader',
                    // 将 CSS 转化成 CommonJS 模块
                    'css-loader',
                    // 将 Sass 编译成 CSS
                    {
                        loader: "sass-loader",
                        options: {implementation: require("dart-sass")}
                    },
                ],
            },
        ],
    },
};
