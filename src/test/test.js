mocha.setup('bdd');

describe(`Use map() to double the values in an array`, function () {
  const equal = chai.assert.equal;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isNull = chai.assert.isNull;

  it('test', () => {
    const test1 = [1, 2, 3, 4, 5];
    const test2 = [71, -548, 12.3, 31415];

    deepEqual(double(test1), [2, 4, 6, 8, 10]);
    deepEqual(double(test2), [142, -1096, 24.6, 62830]);
  });
});

mocha.run();
