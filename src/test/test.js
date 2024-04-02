mocha.setup('bdd');

describe(`Sorting Arrays ... wait, what?!`, function () {
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

  it('test', () => {
    deepEqual([9, 7, 2, 4, 5, 3, 6, 8, 1].sort(), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});

mocha.run();
