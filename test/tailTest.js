const tail = require('../tail');
const assert = require('chai').assert;


describe('#tail', () => {
  it('returns [2, 3] for [1, 2, 3]', () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns ['Lighthouse', 'Labs'] for ['yo yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['yo yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });

  it("returns an empty array for a single element array", () => {
    assert.deepEqual(tail([1]), []);
  });

  it("returns an empty array from an empty array", () => {
    assert.deepEqual(tail([]), []);
  });
});