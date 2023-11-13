mocha.setup('bdd');

describe(`Double Trouble`, function () {
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

  it('test', () => {
    deepEqual(trouble([1, 3, 5, 6, 7, 4, 3], 7), [1, 3, 5, 6, 7, 4]);
    deepEqual(trouble([4, 1, 1, 1, 4], 2), [4, 1, 4]);
    deepEqual(trouble([2, 2, 2, 2, 2, 2], 4), [2]);
    deepEqual(trouble([2, 6, 2], 8), [2, 2]);
  });
});

mocha.run();
