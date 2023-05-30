mocha.setup('bdd');

describe(`Do you speak retsec?`, function () {
  const equal = chai.assert.equal;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isNull = chai.assert.isNull;

  it('returns true when t is a triangular number', function () {
    equal(isTriangular(1), true, 'Failed when t = 1');
    equal(isTriangular(3), true, 'Failed when t = 3');
    equal(isTriangular(6), true, 'Failed when t = 6');
    equal(isTriangular(10), true, 'Failed when t = 10');
    equal(isTriangular(15), true, 'Failed when t = 15');
    equal(isTriangular(21), true, 'Failed when t = 21');
    equal(isTriangular(28), true, 'Failed when t = 28');
  });

  it('returns false when t is not a triangular number', function () {
    equal(isTriangular(2), false, 'Failed when t = 2');
    equal(isTriangular(7), false, 'Failed when t = 7');
    equal(isTriangular(14), false, 'Failed when t = 14');
    equal(isTriangular(27), false, 'Failed when t = 27');
  });
});

mocha.run();
