mocha.setup('bdd');

describe(`Array Appender`, function () {
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
  const noError = chai.assert.doesNotThrow;
  const include = chai.assert.include;

  it('test', () => {
    deepEqual(appendArrays([1, 2], [2, 4]), [1, 2, 2, 4]);
    deepEqual(appendArrays([1, 2], [3, 4]), [1, 2, 3, 4]);
    deepEqual(appendArrays(['this'], ['that']), ['this', 'that']);
    deepEqual(appendArrays(['a', 'B'], ['c', 'D']), ['a', 'B', 'c', 'D']);
    deepEqual(appendArrays([1, 2], [1]), [1, 2, 1]);
  });
});

mocha.run();
