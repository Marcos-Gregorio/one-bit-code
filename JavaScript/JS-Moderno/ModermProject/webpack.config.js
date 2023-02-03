 const path = require('path')
const { output } = require('../UseWebPack/webpack.config')

 module.exports = {
    entry:{
        index: './src/index.js'
    },
    mode:'production',
    module:{
        rules:[
            {
                test: /\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    output:{
        path:path.resolve(__dirname,'public'),
        filename:'[name].bundle.min.js'
    }
 }