mocha.setup('bdd');

describe(`Product of the main diagonal of a square matrix`, function () {
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

  const arr1 = [
    [1, 0],
    [0, 1],
  ];
  it(`mat = ${JSON.stringify(arr1)}`, () => {
    equal(mainDiagonalProduct(arr1), 1);
  });

  const arr2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  it(`mat = ${JSON.stringify(arr2)}`, () => {
    equal(mainDiagonalProduct(arr2), 45);
  });
});

mocha.run();
