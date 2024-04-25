mocha.setup('bdd');

describe(`Sorting by bits`, function () {
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

  it('Basic Tests', function () {
    let a = [3, 8, 3, 6, 5, 7, 9, 1];
    let b = [9, 4, 5, 3, 5, 7, 2, 56, 8, 2, 6, 8, 0];

    sortByBit(a);
    deepEqual(a, [1, 8, 3, 3, 5, 6, 9, 7]);

    sortByBit(b);
    deepEqual(b, [0, 2, 2, 4, 8, 8, 3, 5, 5, 6, 9, 7, 56]);
  });
});

mocha.run();
