mocha.setup('bdd');

describe(`Incorrect division method`, function () {
  const equal = chai.assert.equal;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isNull = chai.assert.isNull;
  const isTrue = chai.assert.isTrue;
  const isFalse = chai.assert.isFalse;

  it('example tests', function () {
    equal(solve(2, 1), 2);
    equal(solve(2, 4), 0.5);
    equal(solve(42, 0), Infinity);
    equal(solve(0, 8), 0);
    equal(solve(7, 2), 3.5);
    equal(solve(4.2, 1), 4.2);
    equal(solve(9999, 11), 909);
  });
});

mocha.run();
