mocha.setup('bdd');

describe(`All, None & Any`, function () {
  const equal = chai.assert.equal;
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

  it('Testing', () => {
    isTrue([1, 2, 3].all(isGreaterThanZero), 'All are greater than zero');
    isFalse([-1, 0, 2].all(isGreaterThanZero), 'One is less than zero');

    isFalse([-1, 2, 3].none(isLessThanZero), 'One is less than zero');
    isTrue([-1, -2, -3].none(isGreaterThanZero), 'None are greater than zero');

    isTrue([-1, 2, 3].any(isGreaterThanZero), 'Two are greater than zero');
    isFalse([-1, -2, -3].any(isGreaterThanZero), 'None are greater than zero');
  });
});

mocha.run();
