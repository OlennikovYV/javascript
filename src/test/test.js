mocha.setup('bdd');

describe(`The falling speed of petals`, function () {
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

  it('Positive numbers', function () {
    equal(adjacentElementsProduct([5, 8]), 40);
    equal(adjacentElementsProduct([1, 2, 3]), 6);
    equal(adjacentElementsProduct([1, 5, 10, 9]), 90);
    equal(adjacentElementsProduct([4, 12, 3, 1, 5]), 48);
    equal(adjacentElementsProduct([5, 1, 2, 3, 1, 4]), 6);
  });

  it('Both positive and negative values', function () {
    equal(adjacentElementsProduct([3, 6, -2, -5, 7, 3]), 21);
    equal(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]), 50);
    equal(adjacentElementsProduct([5, 6, -4, 2, 3, 2, -23]), 30);
    equal(
      adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]),
      -14
    );
    equal(adjacentElementsProduct([5, 1, 2, 3, 1, 4]), 6);
  });

  it('Contains zeroes', function () {
    equal(adjacentElementsProduct([1, 0, 1, 0, 1000]), 0);
    equal(adjacentElementsProduct([1, 2, 3, 0]), 6);
  });
});

mocha.run();
