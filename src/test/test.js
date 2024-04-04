mocha.setup('bdd');

describe(`The Pony Express`, function () {
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

  it('ex', function () {
    equal(riders([18, 15]), 1);
    equal(riders([50, 50]), 1);
    equal(riders([43, 23, 40, 13]), 2);
    equal(riders([33, 8, 16, 47, 30, 30, 46]), 3);
    equal(riders([6, 24, 6, 8, 28, 8, 23, 47, 17, 29, 37, 18, 40, 49]), 4);
    equal(riders([17, 16, 12, 7, 11, 8, 18, 47, 36, 17, 6, 23, 50, 42]), 4);
  });
});

mocha.run();
