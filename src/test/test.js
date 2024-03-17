mocha.setup('bdd');

describe(`Custom sort function`, function () {
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

  it('Basic tests', () => {
    deepEqual(sort([1, 3, 2]), [1, 2, 3]);
    deepEqual(sort([1, 3, 2, 3, 4, 1]), [1, 1, 2, 3, 3, 4]);
    deepEqual(sort([4, 1, 3, 2, 2, 3, 4, 1]), [1, 1, 2, 2, 3, 3, 4, 4]);
    deepEqual(sort([1]), [1]);
    deepEqual(sort([10, 11, 9]), [9, 10, 11]);
    deepEqual(sort(['abc', 'adc', 'acc']), ['abc', 'acc', 'adc']);
  });
});

mocha.run();
