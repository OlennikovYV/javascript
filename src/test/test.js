mocha.setup('bdd');

describe(`Ones' Complement`, function () {
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

  it('test', () => {
    strictEqual(onesComplement('0'), '1');
    strictEqual(onesComplement('1'), '0');
    strictEqual(onesComplement('01'), '10');
    strictEqual(onesComplement('10'), '01');
    strictEqual(onesComplement('1101'), '0010');
  });
});

mocha.run();
