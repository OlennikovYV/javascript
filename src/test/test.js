mocha.setup('bdd');

describe(`Find the calculation type`, function () {
  const equal = chai.assert.equal;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;

  it('addition', function () {
    equal(calcType(1, 2, 3), 'addition');
  });
  it('multiplication', function () {
    equal(calcType(10, 4, 40), 'multiplication');
  });
  it('subtraction', function () {
    equal(calcType(10, 5, 5), 'subtraction');
  });
  it('division', function () {
    equal(calcType(9, 5, 1.8), 'division');
  });
});

mocha.run();
