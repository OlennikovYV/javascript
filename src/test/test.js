mocha.setup('bdd');

describe(`Alternate Square Sum`, function () {
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

  it('test', () => {
    equal(alternateSqSum([]), 0);
    equal(alternateSqSum([1, 2, 3, 4, 5]), 29);
    equal(alternateSqSum([-1, 0, -3, 0, -5, 3]), 0);
    equal(alternateSqSum([-1, 2, -3, 4, -5]), 11);
  });
});

mocha.run();
