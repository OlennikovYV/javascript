mocha.setup('bdd');

describe(`MinMaxMin: Bounded Nums`, function () {
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
    deepEqual(minMinMax([-1, 4, 5, -23, 24]), [-23, -22, 24], 'Test Failed');
    deepEqual(minMinMax([1, 3, -3, -2, 8, -1]), [-3, 0, 8], 'Test Failed');
    deepEqual(minMinMax([2, -4, 8, -5, 9, 7]), [-5, -3, 9], 'Test Failed');
  });
});

mocha.run();
