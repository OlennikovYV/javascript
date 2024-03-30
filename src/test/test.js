mocha.setup('bdd');

describe(`Maximum Triplet Sum (Array Series #7)`, function () {
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
    equal(maxTriSum([3, 2, 6, 8, 2, 3]), 17);
    equal(maxTriSum([2, 9, 13, 10, 5, 2, 9, 5]), 32);
    equal(maxTriSum([2, 1, 8, 0, 6, 4, 8, 6, 2, 4]), 18);
    equal(maxTriSum([-3, -27, -4, -2, -27, -2]), -9);
    equal(maxTriSum([-14, -12, -7, -42, -809, -14, -12]), -33);
    equal(maxTriSum([-13, -50, 57, 13, 67, -13, 57, 108, 67]), 232);
    equal(maxTriSum([-7, 12, -7, 29, -5, 0, -7, 0, 0, 29]), 41);
    equal(maxTriSum([-2, 0, 2]), 0);
    equal(maxTriSum([-2, -4, 0, -9, 2]), 0);
    equal(maxTriSum([-5, -1, -9, 0, 2]), 1);
  });
});

mocha.run();
