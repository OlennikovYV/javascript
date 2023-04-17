mocha.setup('bdd');

describe('Fun with lists: length', function () {
  it('basic tests', function () {
    const assert = chai.assert;

    assert.equal(length(null), 0, 'Not eual');
    assert.equal(length(listFromArray([1, 2, 3, 4])), 4, 'Not eual');
  });
});

mocha.run();
