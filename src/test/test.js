mocha.setup('bdd');

describe(`Email Address Obfuscator`, function () {
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
    equal(obfuscate('test@123.com'), 'test [at] 123 [dot] com');
    equal(
      obfuscate('Code_warrior@foo.ac.uk'),
      'Code_warrior [at] foo [dot] ac [dot] uk'
    );
  });
});

mocha.run();
