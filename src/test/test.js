mocha.setup('bdd');

describe(`Sum of Array Averages`, function () {
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
    equal(
      sumAverage([
        [3, 4, 1, 3, 5, 1, 4],
        [21, 54, 33, 21, 77],
      ]),
      44
    );
    equal(
      sumAverage([
        [-4, 3, -8, -2],
        [2, 9, 1, -5],
        [-7, -2, -6, -4],
      ]),
      -6
    );
  });
});

mocha.run();
