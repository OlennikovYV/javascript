mocha.setup('bdd');

describe(`Averages of numbers`, function () {
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

  it('Basic Tests', function () {
    deepEqual(averages([2, 2, 2, 2, 2]), [2, 2, 2, 2]);
    deepEqual(averages([2, -2, 2, -2, 2]), [0, 0, 0, 0]);
    deepEqual(averages([1, 3, 5, 1, -10]), [2, 4, 3, -4.5]);
  });
});

mocha.run();
