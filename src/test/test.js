mocha.setup('bdd');

describe(`Arithmetic sequence - sum of n elements`, function () {
  const equal = chai.assert.equal;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isNull = chai.assert.isNull;

  it('test', () => {
    equal(ArithmeticSequenceSum(3, 2, 20), 440);
    equal(ArithmeticSequenceSum(2, 2, 10), 110);
    equal(ArithmeticSequenceSum(1, -2, 10), -80);
  });
});

mocha.run();
