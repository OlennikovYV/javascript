mocha.setup('bdd');

describe(`Character Counter`, function () {
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

  it('Tests', function () {
    equal(validateWord('abcabc'), true, 'The word was: "abcabc" \n');
    equal(validateWord('Abcabc'), true, 'The word was: "Abcabc" \n');
    equal(validateWord('abc123'), true, 'The word was: "abc123" \n');
    equal(validateWord('abcabcd'), false, 'The word was: "abcabcd" \n');
    equal(validateWord('abc!abc!'), true, 'The word was: "abc!abc!" \n');
    equal(validateWord('abc:abc'), false, 'The word was: "abc:abc" \n');
  });
});

mocha.run();
