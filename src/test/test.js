mocha.setup('bdd');

describe(`ATM`, function () {
  const equal = chai.assert.equal;
  const notEqual = chai.assert.notEqual;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isNull = chai.assert.isNull;
  const isTrue = chai.assert.isTrue;
  const isFalse = chai.assert.isFalse;
  const approximately = chai.assert.approximately;
  const oneOf = chai.assert.oneOf;
  const isNotEmpty = chai.assert.isNotEmpty;
  const lengthOf = chai.assert.lengthOf;

  it('should work when chosing notes is possible', function () {
    equal(solve(770), 4, 'Wrong result for 770');
    equal(solve(550), 2, 'Wrong result for 550');
    equal(solve(10), 1, 'Wrong result for 10');
    equal(solve(1250), 4, 'Wrong result for 1250');
  });

  it('should return -1 if chosing notes is not possible', function () {
    equal(solve(125), -1, 'Wrong result for 125');
    equal(solve(666), -1, 'Wrong result for 666');
    equal(solve(42), -1, 'Wrong result for 42');
  });
});

mocha.run();
