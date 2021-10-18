const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * Canonical list of all entrypoint pages in the entire app.
 * These strings will be used for all html & js files associated with them, as well as any config IDs within this file.
 * @type {string[]}
 */
const pages = ['index','no-react']

const ENTRY_IMPORT_PREFIX = './app/js/page-initializers/';
const HTML_PLUGINS_IMPORT_PREFIX = './app/html/';
const entries = {}
pages.forEach( page =>
    entries[page] = {
        import: ENTRY_IMPORT_PREFIX + page + '.js'
    }
)
const plugins = pages.map(page=>{
    return new HtmlWebpackPlugin({
        template: HTML_PLUGINS_IMPORT_PREFIX + page + ".html",
        chunks: [page],
        filename: page +".html",
    })
})

module.exports = {
    mode: "development",
    target: ['web', 'es5'],
    entry: entries,
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
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
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
    plugins: plugins,
    // If codebase grows, `eval` should give better build times but you'll lose "original lines" in browser,
    // only the file name and line number will be correct.
    // devtool: 'eval-cheap-module-source-map',
    devtool: 'source-map',

}