mocha.setup('bdd');

describe(`Sum Factorial`, function () {
  const assert = chai.assert;

  it('Small tests', function () {
    assert.equal(sumFactorial([4, 6]), 744);
    assert.equal(sumFactorial([5, 4, 1]), 145);
  });
});

mocha.run();
