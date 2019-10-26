const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common,{
    mode:'production', // 压缩代码
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader:MiniCssExtractPlugin.loader // 提取css到外部文件中
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif)$/, // 打包图片
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name]_[hash].[ext]',
                        outputPath: 'images/',
                    }
                }
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:'style.css'
        })
    ]
})