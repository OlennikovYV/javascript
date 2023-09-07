mocha.setup('bdd');

describe(`Scoring Tests`, function () {
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

  it('Testing for fixed tests', () => {
    equal(scoreTest([0, 0, 0, 0, 2, 1, 0], 2, 0, 1), 9);
    equal(scoreTest([0, 1, 0, 0, 2, 1, 0, 2, 2, 1], 3, -1, 2), 3);
  });
});

mocha.run();
