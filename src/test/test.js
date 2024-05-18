mocha.setup('bdd');

describe(`Partition On`, function () {
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
    const items = [1, 2, 3, 4, 5, 6];

    function isEven(n) {
      return n % 2 == 0;
    }

    const i = partitionOn(isEven, items);

    equal(i, 3, 'partioned at 3');
    deepEqual(items.slice(0, i), [1, 3, 5]);
    deepEqual(items.slice(i), [2, 4, 6]);
  });
});

mocha.run();
