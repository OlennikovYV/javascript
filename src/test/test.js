mocha.setup('bdd');

describe(`Number Pairs`, function () {
  const assert = chai.assert.deepEqual;

  it('should work for some examples', function () {
    let a = [13, 64, 15, 17, 88];
    let b = [23, 14, 53, 17, 80];
    assert(
      getLargerNumbers(a, b),
      [23, 64, 53, 17, 88],
      `Wrong result for a = ${a}, b = ${b}`
    );
    a = [34, -64, 15, 17, 88];
    b = [23, 14, 53, 17, 80];
    assert(
      getLargerNumbers(a, b),
      [34, 14, 53, 17, 88],
      `Wrong result for a = ${a}, b = ${b}`
    );
  });
});

mocha.run();
