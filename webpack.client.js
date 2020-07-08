const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const plugins = require('./webpack/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


const miniCssPlugin = new MiniCssExtractPlugin({
    filename: '[name].css',
})



const config = {
    plugins,
    entry: './src/client/client.js',

  // Tell webpack where to put the output file
  // that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
};

module.exports = merge(baseConfig, config);
