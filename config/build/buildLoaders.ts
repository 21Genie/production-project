import webpack from 'webpack';
import miniCssExtractPlugin from 'mini-css-extract-plugin'
import { BuildOptions } from './types/config';

export function buildLoaders({isDev}: BuildOptions):webpack.RuleSetRule[] {
    const cssLoaders = {
        test: /\.s[ac]ss$/i,
        use: [
          isDev ? 'style-loader' : miniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
                modules: {
                    // функция проверки пути на module.scss
                    auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                    // обычные файлы, которые без module
                    localIdentName: isDev 
                    ? '[path][name]__[local]--[hash:base64:5]' 
                    : '[hash:base64:8]'
                },
            },
          },
          "sass-loader",
        ],
    }

    const typescriptLoader =  {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }
        
    return [
        typescriptLoader,
        cssLoaders
    ]
}