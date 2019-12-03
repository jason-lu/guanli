const {join:pathJoin} = require('path');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:{
        app:['babel-polyfill','./src/index.js']
    },
    output:{
        filename:'[name].[hash].js',
        path:pathJoin(__dirname,'./dist'),
        publicPath:'/'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'template.html',
            filename:'index.html'
        }),
        new VueLoaderPlugin(),
        new CleanWebpackPlugin()
    ]
}