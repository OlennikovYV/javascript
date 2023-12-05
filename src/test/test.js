mocha.setup('bdd');

describe(`Organise duplicate numbers in list`, function () {
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

  it('Testing for input [3, 2, 6, 2, 1, 3]', function () {
    deepEqual(group([3, 2, 6, 2, 1, 3]), [[3, 3], [2, 2], [6], [1]]);
  });
  it('Testing for input [3, 2, 6, 2]', function () {
    deepEqual(group([3, 2, 6, 2]), [[3], [2, 2], [6]]);
  });
});

mocha.run();
