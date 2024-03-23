mocha.setup('bdd');

describe(`Inside Out Strings`, function () {
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

  it('Testing for fixed tests', () => {
    strictEqual(
      insideOut('man i need a taxi up to ubud'),
      'man i ende a atix up to budu'
    );
    strictEqual(
      insideOut('what time are we climbing up the volcano'),
      'hwta item are we milcgnib up the lovcona'
    );
    strictEqual(insideOut('take me to semynak'), 'atek me to mesykan');
  });
});

mocha.run();
