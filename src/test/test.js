mocha.setup('bdd');

describe(`All unique`, function () {
  const assert = chai.assert.equal;

  it('test', () => {
    assert(hasUniqueChars('  nAa'), false); // because there are two spaces ' '
    assert(hasUniqueChars('abcdef'), true);
    assert(hasUniqueChars('aA'), true); // case - sensitivity
    assert(hasUniqueChars('++-'), false); // because there are two '+'
  });
});

mocha.run();
