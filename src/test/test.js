mocha.setup('bdd');

describe(`Are there doubles?`, function () {
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

  it('Example tests', function () {
    equal(doubleCheck('abca'), false);
    equal(doubleCheck('aabc'), true);
    equal(doubleCheck('a 11 c d'), true);
    equal(doubleCheck('AabBcC'), true);
    equal(doubleCheck('a b  c'), true);
    equal(doubleCheck('a b c d e f g h i h k'), false);
  });
});

mocha.run();
