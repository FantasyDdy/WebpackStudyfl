require('../css/base.css');

console.log('这里是webpack的环境分离学习')

//环境分离
/* 
    当配置文件愈发复杂，有时候生产环境和开发环境的配置（webpack.config.js）就会有冲突，此时我们希望有两套配置文件，一套用于开发，一套用于生产
    我们可以可以使用 webpack-merge 插件来实现配置文件的分离保存，我们将创建两个配置文件：dev.config.js（开发环境）和 prod.config.js（生产环境）
    同时，将原先的webpack.config.js改为 base.config.js 用于保存两种环境共用的环境配置。
    
    步骤：
        1.下载js合并插件 npm i webpack-merge -D
        2.把开发环境的依赖放入 dev.config.js,把生产环境的依赖放入 prod.config.js（文件名随意）
        3.将webpack.config.js改名为 base.config.js剥离代码，保留两者共同需要的部分
        4.修改package.json中的scripts快捷指令:"dev": "webpack-dev-server --config dev.config.js","build":"webpack --config prod.config.js"(PS:配置后不能再用“webpack”)
 */
