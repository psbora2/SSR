const path = require('path')
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webNodeExternals = require("webpack-node-externals");
const plugins = require('./webpack/plugin')

const config = {
    plugins,
    target: 'node',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    externals: webNodeExternals()
}

module.exports = merge(baseConfig, config);
