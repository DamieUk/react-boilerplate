import path from 'path';
import express from 'express';
import webpack from 'webpack';
import proxy from 'http-proxy-middleware';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import commonConfig from './common.webpack.config';
import ENV_VARS from './env';

const app = express();
const DIST_DIR = path.join(__dirname, '..', 'dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');
const config = commonConfig(ENV_VARS);
const compiler = webpack(config);

const apiProxy = proxy('/api', { target: ENV_VARS.API_URL, secure: false, changeOrigin: true });

app.set('port', ENV_VARS.PORT);

app.use(webpackDevMiddleware(compiler, { publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));
app.use('/api/*', apiProxy);

app.get('*', (req, res, next) => {
  compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
    if (err) { return next(err); }
    res.set('content-type', 'text/html');
    res.send(result);
    res.end();
  });
});

app.listen(app.get('port'));
