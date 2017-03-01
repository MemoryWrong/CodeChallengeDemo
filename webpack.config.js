/**
 * Created by carlkane1987 on 27/2/17.
 */

module.exports = {
    entry: "./app.js",
    output: {
        path: __dirname+"/dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015','react']
                }
            },
            {
                test: /\.css$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['style-loader', 'css-loader','postcss-loader']
            },
        ]
    },
    resolve: {
        extensions: ['.coffee','.js']
    }
}

