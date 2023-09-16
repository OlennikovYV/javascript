mocha.setup('bdd');

describe(`Collatz Conjecture (3n+1)`, function () {
  const equal = chai.assert.equal;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isNull = chai.assert.isNull;
  const isTrue = chai.assert.isTrue;
  const isFalse = chai.assert.isFalse;
  const approximately = chai.assert.approximately;
  const oneOf = chai.assert.oneOf;
  const isNotEmpty = chai.assert.isNotEmpty;
  const lengthOf = chai.assert.lengthOf;

  it('Examples', function () {
    equal(hotpo(0), 0);
    equal(hotpo(1), 0);
    equal(hotpo(5), 5);
    equal(hotpo(6), 8);
    equal(hotpo(23), 15);
  });
});

mocha.run();
