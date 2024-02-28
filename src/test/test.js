mocha.setup('bdd');

describe(`Is Undefined?`, function () {
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

  it('Tests', () => {
    equal(isUndefined(1), false);
    equal(isUndefined(2), false);
    equal(isUndefined(undefined), true);
    equal(isUndefined(3), false);
    equal(isUndefined(4), false);
  });
});

mocha.run();
