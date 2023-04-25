mocha.setup('bdd');

describe(`No Loops 1 - Small enough?`, function () {
  const assert = chai.assert;

  it('Testing for fixed tests', () => {
    assert.equal(cake(900, 'abcdef'), 'That was close!');
    assert.equal(cake(56, 'ifkhchlhfd'), 'Fire!');
    assert.equal(cake(256, 'aaaaaddddr'), 'Fire!');
    assert.equal(cake(591, 'mufb'), 'That was close!');
  });
});

mocha.run();
