const path = require('path');

module.exports = {
    entry: './src/playground/redux-101.js',
    output: {
        path: path.join(__dirname, 'public'),   // Absolute path on your machine where you want to output the bundle file.
        filename: 'bundle.js'   // Anything we like but this the most common name used.
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
}