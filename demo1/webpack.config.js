const path=require('path') //导入 node.js 中专门操作路径的模块
const HtmlPlugin = require('html-webpack-plugin') //1.导入插件，得到构造函数


//2. 创建插件的实例对象
const htmlPlugin = new HtmlPlugin({
    template: './src/index.html',
    filename: './index.html'
})

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CleanPlugin=new CleanWebpackPlugin()

module.exports = {
    mode: 'development' ,//mode用来指定构建模式，可选值有 development 和 production
   
    //解决source map提示错误行不对的问题，开发环境下使用，生产环境下不建议使用
    devtool:'eval-source-map',

    // 指定打包的入口
    entry: path.join(__dirname, './src/index.js'),  //打包入口文件的路径
    
    // 指定打包的出口
    output: {
        // 表示输出文件的存放路径
        path: path.join(__dirname, './dist'), //输出文件的存放路径
        filename:'js/bundle.js' // 输出文件的名字       
        
    },
    plugins: [htmlPlugin,CleanPlugin],//3.挂载插件的实例对象
    devServer: {
        open: true,
        host: '127.0.0.1',
        port: 80
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            // {test:/\.jpg|png|gif%/,use:'url-loader?limit=692388'}
            {
                test: /\.jpg|png|gif%/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 6923,
                        outputPath:'image',
                    }
                }
            },
            {
                test: /\.js%/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins:['@babel/plugin-proposal-class-properties']
                    }
                }
            }
        ]
    }
}