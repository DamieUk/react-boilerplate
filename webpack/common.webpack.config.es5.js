require('babel-core/register');

const ENV_VARS = require('./env');

module.exports = require('./common.webpack.config')(ENV_VARS);