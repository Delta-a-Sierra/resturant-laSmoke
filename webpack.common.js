const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : './src/index.js',
    plugins: [
        new HtmlWebpackPlugin({
        template: './src/template.html'
    })],
    module:{
        rules: [
            {
                test: /\.html$/i,
                use: ['html-loader']
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        publicPath: 'assets/imgs',
                        outputPath: "assets/imgs",
                        esModule: false,
                    }
                }
            }
        ] 
    }
};