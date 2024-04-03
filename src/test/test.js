mocha.setup('bdd');

describe(`Simple Simple Simple String Expansion`, function () {
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
    strictEqual(stringExpansion('1111'), '');
    strictEqual(stringExpansion(''), '');
    strictEqual(stringExpansion('3abc'), 'aaabbbccc');
    strictEqual(stringExpansion('3D2a5d2f'), 'DDDaadddddff');
    strictEqual(stringExpansion('0d0a0v0t0y'), '');
    strictEqual(stringExpansion('3d332f2a'), 'dddffaa');
    strictEqual(stringExpansion('abcde'), 'abcde');
    strictEqual(stringExpansion('a2bcde'), 'abbccddee');
  });
});

mocha.run();
