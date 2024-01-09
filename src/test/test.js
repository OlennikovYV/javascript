mocha.setup('bdd');

describe(`Number Zoo Patrol`, function () {
  const equal = chai.assert.equal;
  const strictEqual = chai.assert.strictEqual;
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

  it('Tests', () => {
    equal(findNumber([1, 3, 4, 5, 6, 7, 8]), 2);
    equal(findNumber([7, 8, 1, 2, 4, 5, 6]), 3);
    equal(findNumber([1, 2, 3, 5]), 4);
    equal(findNumber([1, 3]), 2);
    equal(findNumber([2, 3, 4]), 1);
    equal(findNumber([13, 11, 10, 3, 2, 1, 4, 5, 6, 9, 7, 8]), 12);
    equal(findNumber([1, 2, 3]), 4);
  });
});

mocha.run();
