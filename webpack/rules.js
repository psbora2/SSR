const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const babelLoader =  {
    test: /\.js?$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
    options: {
        presets: [
            'react', 
            'stage-0',
            ['env', {targets: {browsers: ['last 2 versions']}}]
        ]
    }
}


const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                path: path.resolve(__dirname, 'build')
            },
        },
        'css-loader',
        {
            loader: 'sass-loader',
        },
    ],
}
const fileLoader = {
    test: /\.(png|svg|jpg|gif)$/,
    use: ['file-loader'],
}
const cssLoaderIgnore = {
    test: /\.s[ac]ss$/i,
    loader: 'ignore-loader',
}

module.exports = (configType = 'client') => {
    if (configType === 'client') {
        return [babelLoader, cssLoader, fileLoader]
    } else {
        return [babelLoader, cssLoaderIgnore]
    }
}