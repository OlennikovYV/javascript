mocha.setup('bdd');

describe(`Find the unique number`, function () {
  const equal = chai.assert.equal;
  const strictEqual = chai.assert.strictEqual;
  const notEqual = chai.assert.notEqual;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isUndefined = chai.assert.isUndefined;
  const isNull = chai.assert.isNull;
  const isTrue = chai.assert.isTrue;
  const isFalse = chai.assert.isFalse;
  const approximately = chai.assert.approximately;
  const oneOf = chai.assert.oneOf;
  const isNotEmpty = chai.assert.isNotEmpty;
  const lengthOf = chai.assert.lengthOf;
  const error = chai.assert.throws;
  const include = chai.assert.include;

  it('test', () => {
    equal(findUnique([1, 8, 4, 4, 6, 1, 8]), 6);
    equal(findUnique([1234567]), 1234567);
    equal(findUnique([1, 4, 4, 5, 5, 3, 3, 2, 2]), 1);
    equal(findUnique([2, 2, 5, 5, 4, 3, 3, 1, 1]), 4);
    equal(findUnique([3, 5, 5, 4, 4, 3, 2, 2, 9]), 9);
  });
});

mocha.run();
