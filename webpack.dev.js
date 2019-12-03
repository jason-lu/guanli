const merge = require('webpack-merge');
const common = require('./webpack.common.js');
// const path = require('path');

module.exports = merge(common, {
    mode: 'development', // 不压缩代码,加快编译速度
    devtool: 'source-map', // 提供源码映射文件调试使用
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader','css-loader'] // 使用vue-style-loader直接插入到style标签中
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)(\?\S*)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.less$/,
                use: ['vue-style-loader','css-loader','less-loader']
            },
            {
                test: /\.(mp4|qlv)$/,
                use: 'file-loader',
            },
            {
                test: /\.qlv$/,
                use: 'file-loader',
            },
<<<<<<< HEAD
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
=======
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: file => (
                  /node_modules/.test(file) &&
                  !/\.vue\.js/.test(file)
                )
              }
>>>>>>> 8737cc39f4de8f926bbd9a8e2335e0555b74c644
        ]
    },
})