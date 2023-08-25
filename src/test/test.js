mocha.setup('bdd');

describe(`99 Problems, #1: last in list`, function () {
  const equal = chai.assert.equal;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isNull = chai.assert.isNull;
  const isTrue = chai.assert.isTrue;
  const isFalse = chai.assert.isFalse;
  const approximately = chai.assert.approximately;
  const oneOf = chai.assert.oneOf;
  const isNotEmpty = chai.assert.isNotEmpty;
  const lengthOf = chai.assert.lengthOf;

  it('should work with non-empty lists', function () {
    equal(last([1, 2, 3]), 3, 'last([1,2,3]) == 3');
  });
  it('should work with empty lists', function () {
    equal(last([]), null, 'last( [] ) == null');
  });
});

mocha.run();
