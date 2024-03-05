mocha.setup('bdd');

describe(`Sum - Square Even, Root Odd`, function () {
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

  it('does the thing', () => {
    approximately(
      sumSquareEvenRootOdd([4, 5, 7, 8, 1, 2, 3, 0]),
      91.61,
      Number.EPSILON
    );
    approximately(
      sumSquareEvenRootOdd([1, 14, 9, 8, 17, 21]),
      272.71,
      Number.EPSILON
    );
  });
});

mocha.run();
