const path = require('path');

module.exports = {
    mode: "development",
    entry: './src/Index.tsx',
    output: {
        filename: "index.js",
        path: path.join(__dirname, "/dist"),
        publicPath: "/",
        assetModuleFilename: 'resources/[hash][ext][query]'
    },
    devtool: 'eval',
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts|\.tsx$/,
                use: [{ loader: 'ts-loader' }],
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        https: true,
        historyApiFallback: true,
        open: true,
        compress: false,
        hot: true,
        port: 8080,
        host: 'localhost',
        headers: { 'Access-Control-Allow-Origin': '*' },
        watchFiles: [ '../resources/**/*.*', '../src/**/*.*' ],
        static: [{
            directory: path.join(__dirname, "/resources"),
            serveIndex: true,
            watch: true,
        }],
    }
}