mocha.setup('bdd');

describe(`The maximum and minimum difference -- Simple version`, function () {
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

  it('It should works for basic tests', function () {
    deepEqual(maxAndMin([3, 10, 5], [20, 7, 15, 8]), [17, 2]);
    deepEqual(maxAndMin([3], [20]), [17, 17]);
    deepEqual(maxAndMin([3, 10, 5], [3, 10, 5]), [7, 0]);
    deepEqual(maxAndMin([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]), [9, 1]);
  });
});

mocha.run();
