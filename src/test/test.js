mocha.setup('bdd');

describe(`Sorted Union`, function () {
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

  it('Tests', () => {
    deepEqual(uniteUnique([1, 2], [3, 4]), [1, 2, 3, 4]);
    deepEqual(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]), [1, 3, 2, 5, 4]);
    deepEqual(uniteUnique([4, 3, 2, 2]), [4, 3, 2]);
    deepEqual(uniteUnique([4, 'a', 2], []), [4, 'a', 2]);
    deepEqual(uniteUnique([], [4, 'a', 2]), [4, 'a', 2]);
    deepEqual(uniteUnique([], [4, 'a', 2], []), [4, 'a', 2]);
    deepEqual(uniteUnique([]), []);
    deepEqual(uniteUnique([], []), []);
    deepEqual(uniteUnique([], [1, 2]), [1, 2]);
    deepEqual(uniteUnique([], [1, 2, 1, 2], [2, 1, 1, 2, 1]), [1, 2]);
  });
});

mocha.run();
