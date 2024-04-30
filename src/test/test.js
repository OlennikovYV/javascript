mocha.setup('bdd');

describe(`ASCII hex converter`, function () {
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
    str = 'Look mom, no hands';
    hex = '4c6f6f6b206d6f6d2c206e6f2068616e6473';

    equal(Converter.toHex(str), hex);
    equal(Converter.toAscii(hex), str);

    equal(Converter.toHex(Converter.toAscii(hex)), hex);
    equal(Converter.toAscii(Converter.toHex(str)), str);
  });
});

mocha.run();
