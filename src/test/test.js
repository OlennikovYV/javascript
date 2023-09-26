mocha.setup('bdd');

describe(`Recursion 101`, function () {
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
    deepEqual(solve(6, 19), [6, 7]);
    deepEqual(solve(2, 1), [0, 1]);
    deepEqual(solve(22, 5), [0, 1]);
    deepEqual(solve(2, 10), [2, 2]);
  });
});

mocha.run();
