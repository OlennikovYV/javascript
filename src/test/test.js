mocha.setup('bdd');

describe(`Greatest common divisor`, function () {
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

  it('Example tests', () => {
    strictEqual(mygcd(30, 12), 6);
    strictEqual(mygcd(36, 12), 12);
    strictEqual(mygcd(8, 9), 1);
    strictEqual(mygcd(1, 1), 1);
  });
});

mocha.run();
