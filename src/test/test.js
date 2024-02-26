mocha.setup('bdd');

describe(`Is It Negative Zero (-0)?`, function () {
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

  it('should return true for -0', function () {
    equal(isNegativeZero(-0), true);
  });

  it('should return false for non-negative-zero numbers', function () {
    equal(isNegativeZero(-Infinity), false);
    equal(isNegativeZero(-5), false);
    equal(isNegativeZero(-4), false);
    equal(isNegativeZero(-3), false);
    equal(isNegativeZero(-2), false);
    equal(isNegativeZero(-1), false);
    equal(isNegativeZero(-Number.MIN_VALUE), false);
    equal(isNegativeZero(0), false);
    equal(isNegativeZero(Number.MIN_VALUE), false);
    equal(isNegativeZero(1), false);
    equal(isNegativeZero(2), false);
    equal(isNegativeZero(3), false);
    equal(isNegativeZero(4), false);
    equal(isNegativeZero(5), false);
    equal(isNegativeZero(Infinity), false);
  });
});

mocha.run();
