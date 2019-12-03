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
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:'style.css'
        })
    ],
    optimization: {
        splitChunks: {
          chunks: 'all',
          minSize: 30000,
          maxSize: 0,
          minChunks: 1,
          maxAsyncRequests: 5,
          maxInitialRequests: 3,
          automaticNameDelimiter: '~',
          automaticNameMaxLength: 30,
          name: true,
          cacheGroups: {
            vendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true
            }
          }
        }
      }
})