mocha.setup('bdd');

describe(`Basic JS - Calculating averages`, function () {
  const equal = chai.assert.equal;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isNull = chai.assert.isNull;
  const isTrue = chai.assert.isTrue;
  const isFalse = chai.assert.isFalse;
  const approximately = chai.assert.approximately;
  const oneOf = chai.assert.oneOf;

  let eps = 1e-5;

  it('Type of calculator is correct', () => {
    oneOf(typeof Calculator, ['object', 'function']);
  });

  it('Works for some examples', () => {
    approximately(Calculator.average(3, 4, 5), 4, eps);
    approximately(
      Calculator.average(3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3),
      5.769230769230769,
      eps
    );
    equal(
      Calculator.average(),
      0,
      'Calculator.average() (no arguments) should result in 0'
    );
  });
});

mocha.run();
