mocha.setup('bdd');

describe(`Train to remove duplicates from an array with filter()`, function () {
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
    deepEqual(unique([4]), [4], 'should return [4]');
    deepEqual(unique([1, 2, 2, 3]), [1, 2, 3], 'should return [1,2,3]');
    deepEqual(
      unique([3, 6, 3, 7, 7, 5, 2, 6, 3, 2]),
      [3, 6, 7, 5, 2],
      'should return [3, 6, 7, 5, 2]'
    );
  });
});

mocha.run();
