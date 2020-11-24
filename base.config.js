const path = require('path');
//引入html文件打包插件
const htmlpage = require('html-webpack-plugin');
//引入css文件打包插件
const csspage =require('mini-css-extract-plugin');
/* //引入clean清理插件
const{CleanWebpackPlugin} = require('clean-webpack-plugin');
//引入css压缩插件
const cssoptimize =require('optimize-css-assets-webpack-plugin'); */

module.exports={
    entry:{
       index:'./src/js/index.js'
    },
    output:{
        filename:'aaa/[name].js',
        path:path.resolve(__dirname,'./dist'),
    },
    /* devServer:{
        publicPath:'/dist1/',
        port:3001,
        stats:'minimal'
    }, */
    module:{
        rules:[
            //css文件打包加载器
            {
            test:/\.css$/i,
            use:[
                {
                    loader:csspage.loader,
                    options:{

                    } 
                },
                {
                    loader:'css-loader',
                }
            ],
            },

            //js\css文件内图片打包加载器
            /* {
                test:/\.(jpg|jpeg|bmp|gif|png)$/i,
                loader:'url-loader',
                options:{
                    limit:20480,
                    name:'src1/img/[name].[ext]',
                    esMoudle:false
                }
            } */
            {
                test:/\.(jpg|jpeg|bmp|gif|png)$/i,
                loader:'file-loader',
                options:{
                    name:'src1/img/[name].[ext]',
                    esMoudle:false,
                    publicPath:'../'
                }
            }
        ]
    },
    plugins:[
        //html打包插件
        new htmlpage({
            template:'./src/index.html',
            filename:'index.html'
        }),
        //css打包插件
        new csspage({
            filename:'css/[name].css'
        }),
        /* //clean清理打包插件
        new CleanWebpackPlugin(),
        //css打包压缩插件
        new cssoptimize(), */
    ],

    /* //文件监听
    watch:true,
    
    //开启文件选项
    watchOptions:{
        ignored:/node_modules/,
        aggregateTimeout:5000,
        poll:1000
    }, */

    // mode:'development',
}