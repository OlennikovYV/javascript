mocha.setup('bdd');

describe(`Thinking & Testing: A and B?`, function () {
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

  it('Test', () => {
    strictEqual(testit(0, 1), 1, '');
    strictEqual(testit(1, 2), 3, '');
    strictEqual(testit(10, 20), 30, '');
    strictEqual(testit(1, 1), 1, '');
    strictEqual(testit(1, 3), 3, '');
  });
});

mocha.run();
