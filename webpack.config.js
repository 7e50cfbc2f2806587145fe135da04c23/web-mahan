const path = require('path');
const Webpack = require('coreact/dist/webpack').default;
let name = process.env.APP_NAME;
const basePath = name ? ('/' + name) : '';
const instance = new Webpack({
  mode: process.env.NODE_ENV,
  entries: {
    app: [
      './src/client.ts',
      './styles/app.scss'
    ]
  },
  enableGzip: true,
  path: path.resolve(__dirname, './bundle' + basePath),
  publicPath: basePath + '/dist/',
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-router': 'ReactRouter',
    'axios': 'axios',
  },
  sassOptions: {
    includePaths: [path.resolve(__dirname, './styles')],
    data:'@import "variables";'
  },
});
module.exports = instance.config();
