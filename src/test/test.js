mocha.setup('bdd');

describe(`How many are smaller than me?`, function () {
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

  it('Sample tests', function () {
    deepEqual(smaller([5, 4, 3, 2, -1]), [4, 3, 2, 1, 0]);
    deepEqual(smaller([5, 4, 3, 2, 1]), [4, 3, 2, 1, 0]);
    deepEqual(smaller([1, 2, 3]), [0, 0, 0]);
    deepEqual(smaller([1, 2, 0]), [1, 1, 0]);
    deepEqual(smaller([1, 2, 1]), [0, 1, 0]);
    deepEqual(smaller([1, 1, -1, 0, 0]), [3, 3, 0, 0, 0]);
    deepEqual(
      smaller([5, 4, 7, 9, 2, 4, 4, 5, 6]),
      [4, 1, 5, 5, 0, 0, 0, 0, 0]
    );
    deepEqual(
      smaller([5, 4, 7, 9, 2, 4, 1, 4, 5, 6]),
      [5, 2, 6, 6, 1, 1, 0, 0, 0, 0]
    );
  });
});

mocha.run();
