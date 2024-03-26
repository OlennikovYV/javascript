mocha.setup('bdd');

describe(`EAN Validation`, function () {
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

  it('Test 4003301018398', function () {
    isTrue(
      validateEAN('4003301018398'),
      true,
      'Check EAN-Code "4003301018398"'
    );
  });
  it('Test 9783815820865', function () {
    isTrue(
      validateEAN('9783815820865'),
      true,
      'Check EAN-Code "9783815820865"'
    );
  });
  it('Test 9783815820864', function () {
    isFalse(
      validateEAN('9783815820864'),
      false,
      'Check EAN-Code "9783815820864"'
    );
  });
  it('Test 9783827317100', function () {
    isTrue(
      validateEAN('9783827317100'),
      true,
      'Check EAN-Code "9783827317100"'
    );
  });
});

mocha.run();
