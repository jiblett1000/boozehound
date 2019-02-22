const assert = require('assert');
const app = require('../../src/server/app');

describe('\'recipes\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/recipes');

    assert.ok(service, 'Registered the service');
  });
});
