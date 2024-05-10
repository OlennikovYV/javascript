mocha.setup('bdd');

describe(`Regexp Basics - is it all whitespace?`, function () {
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

  it('Testing for fixed tests', () => {
    equal(''.whitespace(), true);
    equal(' '.whitespace(), true);
    equal('\n\r\n\r'.whitespace(), true);
    equal('a'.whitespace(), false);
    equal('w\n'.whitespace(), false);
    equal('\t'.whitespace(), true);
    equal(' a\n'.whitespace(), false);
    equal('\t \n\r\n  '.whitespace(), true);
    equal('\n\r\n\r '.whitespace(), true);
    equal('\n\r\n\r 3'.whitespace(), false);
  });
});

mocha.run();
