mocha.setup('bdd');

describe(`Integer Difference`, function () {
  const equal = chai.assert.equal;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isNull = chai.assert.isNull;
  const isTrue = chai.assert.isTrue;
  const isFalse = chai.assert.isFalse;

  it('should work for basic tests', function () {
    equal(intDiff([1, 1, 5, 6, 9, 16, 27], 4), 3);
    equal(intDiff([1, 1, 3, 3], 2), 4);
    equal(intDiff([1, 6, 2, 3, 7, 8, 7], 0), 1);
  });
});

mocha.run();
