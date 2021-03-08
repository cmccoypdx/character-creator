const d20 = require('../lib/d20.js');

const assert = require('assert');

describe('d20', () => {
  it('should return a number between 1 and 20', () => {
    const result = d20();
    assert(1 >= result <= 20);
  });
});
