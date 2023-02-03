const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports ={
    entry:'./src/index.js',
    mode:'production',
    module:{
        rules:[{
            test:/\.css$/,
            use:[ MiniCssExtractPlugin.loader, 'css-loader']
        }]
    },
    output:{
        path: path.resolve(__dirname,'public'),
        filename:'[name].bundle.min.js'
    },
    plugins:[
        new MiniCssExtractPlugin()
    ]
}