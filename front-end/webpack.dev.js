const path  = require('path')
var HtmlWebPackPlugin = require('html-webpack-plugin')
const common = require("./webpack.common")
const {merge}  = require("webpack-merge")
module.exports  = merge(common, {
    mode: "development",
    output:{
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "bundle")
    },
    plugins:[new HtmlWebPackPlugin({
        filename: 'index.html',
        template:"./src/index.html"
    })],
    module: {
        rules: [

            {
                test: /\.scss$/,
                use: ["style-loader",//3. Inyecta los estilos al DOM 
                "css-loader",//2. Convierte css a common js
                "sass-loader"//1. Convierte sass a css
            ]
            },
            {
                test: /\.css$/,
                use: ["style-loader",//2. Inyecta los estilos al DOM 
                "css-loader"//1. Convierte css a common js
            ]
            }
        ]
    }
});