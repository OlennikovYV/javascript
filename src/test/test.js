mocha.setup('bdd');

describe('All Star Code Challenge #16', function () {
  const assert = chai.assert;

  it('test', () => {
    assert.equal(noRepeat('aabbccdde'), 'e');
    assert.equal(noRepeat('wxyz'), 'w');
    assert.equal(noRepeat('testing'), 'e');
  });
});

mocha.run();
