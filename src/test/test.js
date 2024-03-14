mocha.setup('bdd');

describe(`Adding useful functional functionality to JavaScript arrays`, function () {
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

  it("Array's first value should begin with start", () => {
    deepEqual(Array.range(1, 3), [1, 2, 3]);
  });
  it('Should work for negative starts', () => {
    deepEqual(Array.range(-1, 1), [-1]);
    deepEqual(Array.range(-3, 5), [-3, -2, -1, 0, 1]);
  });
  it('Should return empty array for zero counts', () => {
    deepEqual(Array.range(0, 0), []);
    deepEqual(Array.range(1, 0), []);
  });

  it('Empty array should sum to 0', () => {
    equal([].sum(), 0);
  });
  it('Should be able to add negative numbers', () => {
    equal([-2, -1, -5].sum(), -8);
  });
  it('Should be able to add all numbers in the array', () => {
    equal([-3, -2, -1, 0, 1, 2, 3].sum(), 0);
  });
});

mocha.run();
