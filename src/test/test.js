mocha.setup('bdd');

describe(`SillyCASE`, function () {
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

  it('should be idempotent', function () {
    equal(sillycase('foobar'), 'fooBAR');
    equal(sillycase('codewars'), 'codeWARS');
    equal(sillycase('brian'), 'briAN');
  });
});

mocha.run();
