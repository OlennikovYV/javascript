mocha.setup('bdd');

describe(`Find missing numbers`, function () {
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

  it('Example tests', function () {
    deepEqual(findMissingNumbers([-3, -2, 1, 4]), [-1, 0, 2, 3]);
    deepEqual(findMissingNumbers([-1, 0, 1, 2, 3, 4]), []);
    deepEqual(findMissingNumbers([]), []);
  });
});

mocha.run();
