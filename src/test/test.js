mocha.setup('bdd');

describe(`World Bits War`, function () {
  const equal = chai.assert.equal;
  const strictEqual = chai.assert.strictEqual;
  const notEqual = chai.assert.notEqual;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isNull = chai.assert.isNull;
  const isTrue = chai.assert.isTrue;
  const isFalse = chai.assert.isFalse;
  const approximately = chai.assert.approximately;
  const oneOf = chai.assert.oneOf;
  const isNotEmpty = chai.assert.isNotEmpty;
  const lengthOf = chai.assert.lengthOf;
  const error = chai.assert.throws;
  const include = chai.assert.include;

  it('Testing for fixed tests', () => {
    strictEqual(bitsWar([1, 5, 12]), 'odds win');
    strictEqual(bitsWar([7, -3, 20]), 'evens win');
    strictEqual(bitsWar([7, -3, -2, 6]), 'tie');
    strictEqual(bitsWar([-3, -5]), 'evens win');
    strictEqual(bitsWar([]), 'tie');
  });
});

mocha.run();
