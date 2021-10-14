const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    target: ['web', 'es5'],
    entry: {
        index: {
            import: './app/js/page-initializers/index.js'
        },
        noReact: {
            import: './app/js/page-initializers/no-react.js'
        }
    },
    output: {
        filename: '[name].bundle.js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                "@babel/env",
                                {
                                    targets: {
                                        "edge": "17",
                                        "firefox": "60",
                                        "chrome": "68",
                                        "safari": "9.0",
                                        "ie": "10"
                                    },
                                    useBuiltIns: "usage",
                                    corejs: "3.18.0"
                                },
                            ],
                            "@babel/preset-react"
                        ]
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            },      {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(html)$/,
                use: ['html-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Bootstrap No React',
            template: "./app/html/no-react.html",
            chunks: ['noReact'],
            filename: "no-react.html",
        }),
        new HtmlWebpackPlugin({
            title: 'Bootstrap React',
            template: "./app/html/index.html",
            chunks: ['index'],
            filename: "index.html",
        })
    ],
    // If codebase grows, `eval` should give better build times but you'll lose "original lines" in browser,
    // only the file name and line number will be correct.
    // devtool: 'eval-cheap-module-source-map',
    devtool: 'source-map',

}