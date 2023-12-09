mocha.setup('bdd');

describe(`Sum of a nested list`, function () {
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

  it('should handle non-nested lists', function () {
    equal(sumNested([1]), 1);
    equal(sumNested([1, 2, 3, 4]), 10);
    equal(sumNested([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 55);
  });
  it('non-nested edge case', function () {
    equal(sumNested([]), 0);
  });
  it('should handle simple nestings', function () {
    equal(sumNested([[1], []]), 1);
    equal(sumNested([[1, 2, 3, 4]]), 10);
  });
  it('should handle more complex nestings', function () {
    equal(sumNested([1, [1], [[1]], [[[1]]]]), 4);
    equal(sumNested([1, [1], [1, [1]], [1, [1], [1, [1]]]]), 8);
  });
  it('complex nesting edge case', function () {
    equal(
      sumNested([[[[], [], [[[[[[[[[[]]]]]]]]]]], [], [], [[[], [[]]]]], []]),
      0
    );
  });
});

mocha.run();
