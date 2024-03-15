mocha.setup('bdd');

describe(`Credit card issuer checking`, function () {
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
    equal(getIssuer(4111111111111111), 'VISA');
    equal(getIssuer(378282246310005), 'AMEX');
    equal(getIssuer(9111111111111111), 'Unknown');
    equal(getIssuer(6011111111111117), 'Discover');
    equal(getIssuer(5105105105105100), 'Mastercard');
  });
});

mocha.run();
