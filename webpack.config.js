// 引入一个包
const path = require('path');
// 引入html插件,能生成dist目录下的html文件
const htmlWebpackPlugin = require('html-webpack-plugin')
// 引入clean插件
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

// webpack所有的配置信息都应该写在module.exports中
module.exports = {

    // 指定入口文件
    entry: "./src/index.ts",

    // 指定打包文件所在目录
    output: {
        // 指定打包文件的目录
        path: path.resolve(__dirname, 'dist'),
        //打包后文件的文件
        filename: "bundle.js",
        //打包环境
        environment: {
            arrowFunction: false, //关闭箭头函数兼容IE
            const: false
        }
    },

    //指定webpack打包时要使用模块
    module: {
        // 指定要加载的规则
        rules: [
            {
                // test指定的是规则生效的文件
                test:/\.ts$/,
                //要使用的loader
                use:[
                    // 配置加载器
                    {
                        // 指定加载器(复杂的写对象)
                        loader:"babel-loader",
                        // 设置babel
                        options: {
                            // 设置预定义的环境
                            presets:[
                                [ 
                                    // 指定环境的插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        // 需要兼容的目标浏览器版本
                                        targets:{
                                            "chrome":"88",
                                            'ie':'11'
                                        },
                                        // 指定corejs版本:内置了promise等兼容性实现
                                        "corejs":"3",
                                        // 使用corejs的方式"usage":按需加载
                                        "useBuiltIns":"usage"
                                    }
                                ]
                            ]
                        }
                    },
                    // 简单的直接指定loader名
                    'ts-loader'
                ],
                //要排除的文件
                exclude: /node-modules/
            },

            // 设置less文件处理规则
            {
                test:/\.less/,
                use:[
                    "style-loader",
                    "css-loader",
                    // 引入postcss
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        'postcss-preset-env',
                                        {
                                            browsers: 'last 2 versions'
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader",
                ]
            }
        ]
    },
    mode:'development',

    // 配置Webpack插件
    plugins: [
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            // title:'snake'
            template:'./src/index.html'
        }),
    ],

    // 用来设置引用模块:告诉webpack哪些文件可以作为模块引用
    resolve: {
        extensions: ['.ts', '.js']
    }
}