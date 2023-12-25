import webpack, { DefinePlugin } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';

export default ({ config }: {config: webpack.Configuration}) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  // eslint-disable-next-line no-param-reassign
  config.module!.rules! = config.module!.rules!.map((rule: any) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  config.module?.rules?.push({
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  });

  config!.resolve!.modules = [paths.src, 'node_modules'];
  config.resolve?.extensions?.push('.ts', '.tsx');
  config.module?.rules?.push(buildCssLoaders(true));

  config.plugins?.push(new DefinePlugin({
    __IS_DEV__: true,
  }));

  return config;
};
