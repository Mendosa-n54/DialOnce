// Initializes the `urlShortener` service on path `/url-shortener`
const { UrlShortener } = require('./url-shortener.class');
const createModel = require('../../models/url-shortener.model');
const hooks = require('./url-shortener.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/url-shortener', new UrlShortener(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('url-shortener');

  service.hooks(hooks);
};
