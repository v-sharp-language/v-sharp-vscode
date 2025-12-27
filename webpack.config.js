'use strict';

const path = require('path');

/** @type {import('webpack').Configuration} */
module.exports = {
    mode: 'production',
    target: 'node',
    entry: './src/extension.ts',
    output: {
        path: path.resolve(__dirname, 'out'),
        filename: 'extension.js',
        libraryTarget: 'commonjs2',
    },
    externals: {
        vscode: 'commonjs vscode',
        'vscode-languageclient': 'commonjs vscode-languageclient',
        'vscode-languageserver-protocol': 'commonjs vscode-languageserver-protocol',
        'vscode-languageserver-types': 'commonjs vscode-languageserver-types',
        'vscode-jsonrpc': 'commonjs vscode-jsonrpc',
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
        ],
    },
};
