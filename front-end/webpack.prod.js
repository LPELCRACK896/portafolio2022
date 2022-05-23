const path  = require('path')
var HtmlWebPackPlugin = require('html-webpack-plugin')
const common = require("./webpack.common")
const {merge}  = require("webpack-merge")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const MinCssExtractProduction = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports  = merge(common, {
    mode: "production",
    output:{
        filename: "[name].[contenthash].bundle.js",
        path: path.resolve(__dirname, "bundle")
    },
    plugins:[
        new MinCssExtractProduction({filename:"[name].[contenthash].css"}),
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            filename: 'index.html', 
            template:"./src/index.html",
            minify:{
                removeAttributeQuotes:true,
                collapseWhitespace: true,
                removeComments:true
            }

        })
    ],
    optimization: {
        minimizer: [
          new CssMinimizerPlugin(), new TerserPlugin()
        ]
    },  
    module:{
        rules:[
            {
                test: /\.scss$/,
                use: [MinCssExtractProduction.loader,//3. Extrae Css into files 
                "css-loader",//2. Convierte css a common js
                "sass-loader"//1. Convierte sass a css
            ]
            },
            {
                test: /\.css$/,//3. Extrae Css into files
                use: [MinCssExtractProduction.loader,//2. Inyecta los estilos al DOM 
                "css-loader"//1. Convierte css a common js
            ]
            }
        ]
    }
});