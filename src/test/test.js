mocha.setup('bdd');

describe(`Find all non-consecutive numbers`, function () {
  const equal = chai.assert.equal;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isNull = chai.assert.isNull;

  it('test', () => {
    const results = allNonConsecutive([1, 2, 3, 4, 6, 7, 8, 10]);

    deepEqual(results, [
      { i: 4, n: 6 },
      { i: 7, n: 10 },
    ]);
  });
});

mocha.run();
