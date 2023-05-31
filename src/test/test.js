mocha.setup('bdd');

describe(`max diff - easy`, function () {
  const equal = chai.assert.equal;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isNull = chai.assert.isNull;

  it('Test', () => {
    equal(maxDiff([0, 1, 2, 3, 4, 5, 6]), 6);
    equal(maxDiff([-0, 1, 2, -3, 4, 5, -6]), 11);
    equal(maxDiff([0, 1, 2, 3, 4, 5, 16]), 16);
    equal(maxDiff([16]), 0);
    equal(maxDiff([]), 0);
  });
});

mocha.run();
