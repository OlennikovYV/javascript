mocha.setup('bdd');

describe(`Identical Elements`, function () {
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

  it('It should handle positive duplicates', function () {
    equal(duplicateElements([1, 2, 3, 4, 5], [1, 6, 7, 8, 9]), true);
    equal(duplicateElements([9, 8, 7], [8, 1, 3]), true);
  });
});

mocha.run();
