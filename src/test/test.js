mocha.setup('bdd');

describe(`Cryptanalysis Word Patterns`, function () {
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

  it('should pass fixed tests', function () {
    equal(wordPattern('hello'), '0.1.2.2.3');
    equal(wordPattern('heLlo'), '0.1.2.2.3');
    equal(wordPattern('helLo'), '0.1.2.2.3');
    equal(
      wordPattern('Hippopotomonstrosesquippedaliophobia'),
      '0.1.2.2.3.2.3.4.3.5.3.6.7.4.8.3.7.9.7.10.11.1.2.2.9.12.13.14.1.3.2.0.3.15.1.13'
    );
  });
});

mocha.run();
