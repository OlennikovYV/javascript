mocha.setup('bdd');

describe(`For the sake of argument`, function () {
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
    equal(numbers(1, 4, 3, 2, 5), true);
    equal(numbers(1, 'a', 3), false);
    equal(numbers(1, 3, NaN), true);
  });
});

mocha.run();
