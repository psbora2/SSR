const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const rules = require('./webpack/rules')


module.exports = {
  module: { rules: rules() }
};