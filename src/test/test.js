mocha.setup('bdd');

describe(`Simple Fun #37: House Numbers Sum`, function () {
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

  it('It should works for basic tests.', function () {
    equal(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]), 11);
    equal(houseNumbersSum([4, 2, 1, 6, 0]), 13);
    equal(houseNumbersSum([4, 1, 2, 3, 0, 10, 2]), 10);
    equal(houseNumbersSum([0, 1, 2, 3, 4, 5]), 0);
  });
});

mocha.run();
