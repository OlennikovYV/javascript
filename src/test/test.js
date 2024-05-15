mocha.setup('bdd');

describe(`Permute a Palindrome`, function () {
  const equal = chai.assert.equal;
  const strictEqual = chai.assert.strictEqual;
  const notEqual = chai.assert.notEqual;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isUndefined = chai.assert.isUndefined;
  const isNull = chai.assert.isNull;
  const isTrue = chai.assert.isTrue;
  const isFalse = chai.assert.isFalse;
  const approximately = chai.assert.approximately;
  const oneOf = chai.assert.oneOf;
  const isNotEmpty = chai.assert.isNotEmpty;
  const lengthOf = chai.assert.lengthOf;
  const error = chai.assert.throws;
  const noError = chai.assert.doesNotThrow;
  const include = chai.assert.include;

  it(`input = "a"`, () => {
    equal(permuteAPalindrome('a'), true);
  });

  it(`input = "aa"`, () => {
    equal(permuteAPalindrome('aa'), true);
  });

  it(`input = "aaa"`, () => {
    equal(permuteAPalindrome('aaa'), true);
  });

  it(`input = "baa"`, () => {
    equal(permuteAPalindrome('baa'), true);
  });

  it(`input = "aab"`, () => {
    equal(permuteAPalindrome('aab'), true);
  });

  it(`input = "baabcd"`, () => {
    equal(permuteAPalindrome('baabcd'), false);
  });

  it(`input = "racecars"`, () => {
    equal(permuteAPalindrome('racecars'), false);
  });

  it(`input = "abcdefghba"`, () => {
    equal(permuteAPalindrome('abcdefghba'), false);
  });

  it(`input is an empty string`, () => {
    equal(permuteAPalindrome(''), true);
  });
});

mocha.run();
