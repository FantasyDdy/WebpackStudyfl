//引入合并js插件
const {merge} =require('webpack-merge');

//引入base.config.js公共环境配置
const base = require('./base.config');

//引入clean清理插件
const{CleanWebpackPlugin} = require('clean-webpack-plugin');
//引入css压缩插件
const cssoptimize =require('optimize-css-assets-webpack-plugin');

//生产环境配置
module.exports = merge(base,{
    //插件
    plugins:[
        //clean清理打包插件
        new CleanWebpackPlugin({cleanStaleWebpackAssets:false}),
        //css打包压缩插件
        new cssoptimize(),
    ],

    //文件监听
    watch:true,
    //开启文件选项
    watchOptions:{
        ignored:/node_modules/,
        aggregateTimeout:5000,
        poll:1000
    },

    //devTool
    devtool:'source-map',

    //生产模式
    mode:'production',
})