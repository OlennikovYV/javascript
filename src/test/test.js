mocha.setup('bdd');

describe(`Array2Binary addition`, function () {
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
    equal(arr2bin([1, 2]), '11');
    equal(arr2bin([1, 2, 3, 4, 5]), '1111');
    equal(arr2bin([1, 10, 100, 1000]), '10001010111');
    isFalse(arr2bin([1, 2, 'a']), false);
    isFalse(arr2bin([1, 2, 1.2]), false);
  });
});

mocha.run();
