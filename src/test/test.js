mocha.setup('bdd');

describe(`Difference of 2`, function () {
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

  it('Tests', function () {
    deepEqual(twosDifference([1, 2, 3, 4]), [
      [1, 3],
      [2, 4],
    ]);
    deepEqual(twosDifference([1, 3, 4, 6]), [
      [1, 3],
      [4, 6],
    ]);
    deepEqual(twosDifference([0, 3, 1, 4]), [[1, 3]]);
  });
});

mocha.run();
