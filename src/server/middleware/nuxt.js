const { Nuxt, Builder } = require('nuxt');
const config = require('../../../nuxt.config.js');

// Setup nuxt.js
const nuxt = new Nuxt(config);

if (config.dev) {
  const builder = new Builder(nuxt);
  builder.build().then(() => process.emit('nuxt:build:done'));
} else {
  process.nextTick(() => process.emit('nuxt:build:done'));
}

// Add nuxt.js middleware
module.exports = function (req, res) {
  nuxt.render(req, res);
};
