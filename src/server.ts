require('module-alias/register');
const path = require('path');
import express from 'express';
import {serverHandler} from 'coreact/dist/serverHandler';

const port = process.env.PORT;
const isDevelopment = process.env.NODE_ENV === 'development';
(async () => {
  const name = process.env.APP_NAME;
  const app = express();
  const basePath = name ? ('/' + name) : '';
  require('coreact/dist/webpack').register(path.resolve(__dirname, '.'), basePath + '/dist/src');
  const Provider = require('./provider').default;
  const common = [
    '/assets/fonts/fonts.css',
    '/assets/axios.js.gz',
    '/assets/jquery.js.gz',
    '/assets/popper.js.gz',
    '/assets/bootstrap.js.gz',
    '/assets/react.js.gz',
    '/assets/dom.js.gz',
    '/assets/router.js.gz',
  ];
  serverHandler(app, {
    provider: Provider,
    match: basePath + '*',
    assets: isDevelopment ? [
      ...common,
      '/dist/app.js',
    ] : [
      ...common,
      '/dist/app.js.gz',
      '/dist/app.css',
    ],
    enableGzip: true,
    proxy: process.env.API_ADDR,
    apiPrefix: process.env.API_PREFIX,
    publicDir: ['/assets', path.resolve(__dirname, '../assets')],
    bundleDir: ['/dist', path.resolve(__dirname, '../bundle' + basePath)],
    webpackOptions: isDevelopment ? require('../webpack.config.js') : {},
  });
  await app.listen(port, () => console.log(`Listening on port ${port}`));
})();
process.on('uncaughtException', (err) => {
  console.log(err);
});
