const path = require('path');
module.exports = {
    entry: {
        bundle: './src/app.ts'
    },  
    output: {
        path: path.join(__dirname,'dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions:['.ts','.js']
    },
    devServer: {
        contentBase: path.join(__dirname,'dist'),
        port: 9000,
        open: true
    },
    module: {
        rules: [
            {
                test:/\.ts$/,loader:'ts-loader'
            }
        ]
    }
}