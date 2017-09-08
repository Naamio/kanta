const path = require('path');
const webpack = require('webpack');

const commonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
    entry: {
        'kanta': "./src/index.ts",
    },
    externals: {
        "vue": "Vue"
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../lib'),
        libraryTarget: 'umd',
        library: 'kanta',
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                exclude: '/node_modules/',
                loader: 'ts-loader',
                test: /\.tsx?$/,
                options: {}
            }]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: [".ts", ".json", ".js"]
    },
    plugins: [
    ]
}
