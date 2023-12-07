mocha.setup('bdd');

describe(`Cut array into smaller parts`, function () {
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

  it('Sample Tests', () => {
    deepEqual(makeParts([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]);
    deepEqual(makeParts([1, 2, 3], 1), [[1], [2], [3]]);
    deepEqual(makeParts([1, 2, 3, 4, 5], 10), [[1, 2, 3, 4, 5]]);
  });
});

mocha.run();
