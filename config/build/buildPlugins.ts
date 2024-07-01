import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';
import miniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildPlugins({paths}: BuildOptions):webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        
        new webpack.ProgressPlugin(),

        new miniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        })
    ]
}