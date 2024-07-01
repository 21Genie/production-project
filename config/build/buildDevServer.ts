import { Configuration as DevServerConfigFunction } from 'webpack-dev-server';
import { BuildOptions } from './types/config';
 
export function buildDevServer(options: BuildOptions): DevServerConfigFunction {
    return {
        port: options.port,
        // open - авто. открывает страницу
        open: true,
        // historyApiFallback - 
        historyApiFallback: true,
    }
} 