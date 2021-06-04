const assert = require('assert');
const app = require('../../src/app');

describe('\'urlShortener\' service', () => {
  it('registered the service', () => {
    const service = app.service('url-shortener');

    assert.ok(service, 'Registered the service');
  });
});
