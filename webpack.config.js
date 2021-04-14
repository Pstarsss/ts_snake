const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 指定的打包入口
    entry: "./src/index.ts",

    // 指定的打包文件出口所在的目录
    output: {
        path: path.resolve(__dirname, 'dist'),
        
        filename: 'bundle.js',

        environment:{
            // 箭头函数的 保留
            arrowFunction: false
        }
    },

    mode: 'development',

    module: {
        rules: [
            {
                test: /\.ts$/,
                // 这个loader 是从后往前
                use: [
                    {
                        // babel的配置信息
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    // 指定环境的插件
                                    '@babel/preset-env',

                                    // 配置信息
                                    {
                                        targets: {
                                            "chrome": "58",
                                            "ie": '11'
                                        },
                                        "corejs": "3",
                                        // 使用corejs的方式  
                                        // usage 按需加载
                                        "useBuiltIns":"usage"
                                    }
                                ]
                            ]
                        } 
                    }, 
                'ts-loader',],
                exclude: '/node_modules/'
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions:{
                                plugins:[
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers: 'last 2 versions'
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader"
                ],
                exclude: '/node_modules/'
            }
        ]
    },
    
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ],

    // 设置模块化的打包
    resolve: {
        extensions: ['.ts', '.js']
    }
    
}