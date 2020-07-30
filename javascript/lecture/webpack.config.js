const path = require('path');
const webpack = require('webpack');

module.exports = {
    name: 'word-relay-setting',
    mode: 'development', // service: production
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    

    entry: {
        app: ['./client'],
    }, // input

    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-syntax-class-properties', 'react-hot-loader/babel'],
            },
        }]
    },

    plugins: [
        new webpack.LoaderOptionsPlugin({  debug: true  })
    ],

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/dist/'
    }, // output
};