const urlShortener = require('./url-shortener/url-shortener.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(urlShortener);
};
