mocha.setup('bdd');

describe(`Push a hash/an object into array`, function () {
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

  it('should has a value', function () {
    isNotEmpty(items, 'The array is still empty');
  });
  it('should has only one value', function () {
    lengthOf(items, 1, 'The array contains too many values');
  });
  it('should has the correct value', function () {
    deepEqual(
      items,
      [{ a: 'b', c: 'd' }],
      'The array does not contain the correct value"'
    );
  });
});

mocha.run();
