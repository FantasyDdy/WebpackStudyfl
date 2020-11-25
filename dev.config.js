//引入合并js插件
const {merge} =require('webpack-merge');

//引入base.config.js公共环境配置
const base = require('./base.config');

//开发环境配置
module.exports= merge(base,{
    //内存打包
    devServer:{
        publicPath:'/dist1/',
        port:3001,
        stats:'minimal'
    },

    //devTool
    devtool:'eval-source-map',

    //开发模式
    mode:'development',
})