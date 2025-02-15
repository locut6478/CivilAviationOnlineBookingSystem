// 引入必要的模块
// var webpack = require('webpack');
const path = require('path')

// 解析文件路径的工具函数
function resolve(dir) {
    return path.join(__dirname, dir)
}

// 根据环境确定publicPath的函数
function publicPath(){
    if (process.env.NODE_ENV == 'production') {
        return "././";    // 生产环境使用相对路径
    } else {
        return "/";       // 开发环境使用根路径
    }
}

// Vue项目配置
module.exports = {
    // 项目部署路径配置
    publicPath: publicPath(),

    // webpack配置
    configureWebpack: {
        // source map配置，用于调试
        devtool: 'source-map',
        // 路径别名配置
        resolve: {
            alias: {
                '@': resolve('src')  // 设置@指向src目录
            }
        }
    },

    // 是否在保存时检查代码
    lintOnSave: false,

    // 开发服务器配置
    devServer: {
        host: "0.0.0.0",     // 允许外部访问
        port: 8081,          // 服务端口
        hot: true,           // 启用热重载
        https: false,        // 是否使用https
        proxy: {             // 代理配置
            '/mhwangshangdingpiao': {
                target: 'http://localhost:8080/mhwangshangdingpiao/',  // 代理目标地址
                changeOrigin: true,   // 允许跨域
                secure: false,        // 不验证SSL证书
                pathRewrite: {        // 路径重写规则
                    '^/mhwangshangdingpiao': ''
                }
            }
        }
    },

    // webpack链式配置
    chainWebpack(config) {
        // SVG图标配置
        config.module
          .rule('svg')
          .exclude.add(resolve('src/icons'))
          .end()
        config.module
          .rule('icons')
          .test(/\.svg$/)
          .include.add(resolve('src/icons'))
          .end()
          .use('svg-sprite-loader')
          .loader('svg-sprite-loader')
          .options({
            symbolId: 'icon-[name]'   // 设置svg图标的symbolId格式
          })
          .end()
    }
}
