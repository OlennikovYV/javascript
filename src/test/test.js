mocha.setup('bdd');

describe(`Max-min arrays`, function () {
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
    deepEqual(solve([15, 11, 10, 7, 12]), [15, 7, 12, 10, 11]);
    deepEqual(solve([91, 75, 86, 14, 82]), [91, 14, 86, 75, 82]);
    deepEqual(solve([84, 79, 76, 61, 78]), [84, 61, 79, 76, 78]);
    deepEqual(
      solve([52, 77, 72, 44, 74, 76, 40]),
      [77, 40, 76, 44, 74, 52, 72]
    );
    deepEqual(solve([1, 6, 9, 4, 3, 7, 8, 2]), [9, 1, 8, 2, 7, 3, 6, 4]);
    deepEqual(
      solve([78, 79, 52, 87, 16, 74, 31, 63, 80]),
      [87, 16, 80, 31, 79, 52, 78, 63, 74]
    );
  });
});

mocha.run();
