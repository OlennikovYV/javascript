mocha.setup('bdd');

describe(`Complete The Pattern #6 - Odd Ladder`, function () {
  const equal = chai.assert.equal;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isNull = chai.assert.isNull;
  const isTrue = chai.assert.isTrue;
  const isFalse = chai.assert.isFalse;
  const approximately = chai.assert.approximately;
  const oneOf = chai.assert.oneOf;
  const isNotEmpty = chai.assert.isNotEmpty;
  const lengthOf = chai.assert.lengthOf;

  it('test', () => {
    equal(pattern(4), '1\n333');
    equal(pattern(1), '1');
    equal(pattern(5), '1\n333\n55555');
    equal(pattern(0), '');
    equal(pattern(-25), '');
  });
});

mocha.run();
