module.exports = {
    mode: "development",
    watch: true,
    entry: "./src/index.tsx",
    output: {
        filename: "index.js",
        path: __dirname + "/dist"
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
    }
}