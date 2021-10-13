const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    target: ['web', 'es5'],
    entry: {
        index: {
            import: './app/js/page-components/index.js'
        },
        another: {
            import: './app/js/page-components/another.js'
        },
        components: {
            import: './app/js/page-components/components.js'
        },
        reactOnly: {
            import: './app/js/page-components/reactOnly.js'
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
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Index',
            template: "./app/html/index.html",
            chunks: ['index'],
        }),
        new HtmlWebpackPlugin({
            title: 'Another',
            template: "./app/html/another.html",
            chunks: ['another'],
            filename: "another.html",
        }),
        new HtmlWebpackPlugin({
            title: 'Components',
            template: "./app/html/components.html",
            chunks: ['components'],
            filename: "components.html",
        }),
        new HtmlWebpackPlugin({
            title: 'React Only',
            template: "./app/html/react-only.html",
            chunks: ['reactOnly'],
            filename: "react-only.html",
        })
    ],
    // If codebase grows, `eval` should give better build times but you'll lose "original lines" in browser,
    // only the file name and line number will be correct.
    // devtool: 'eval-cheap-module-source-map',
    devtool: 'source-map',

}