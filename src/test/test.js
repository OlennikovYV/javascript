mocha.setup('bdd');

describe(`Complete The Pattern #7 - Cyclical Permutation`, function () {
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
    equal(
      pattern(7),
      '1234567\n2345671\n3456712\n4567123\n5671234\n6712345\n7123456'
    );
    equal(pattern(1), '1');
    equal(pattern(4), '1234\n2341\n3412\n4123');
    equal(pattern(0), '');
    equal(pattern(-25), '');
  });
});

mocha.run();
