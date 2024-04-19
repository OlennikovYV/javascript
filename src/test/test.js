mocha.setup('bdd');

describe(`Invalid Input - Error Handling #1`, function () {
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
  const include = chai.assert.include;

  it('Happy Tests', () => {
    deepEqual(
      getCount('Test'),
      { vowels: 1, consonants: 3 },
      'Should return 1 vowel and 3 consonants'
    );
    deepEqual(
      getCount('Here is some text'),
      { vowels: 6, consonants: 8 },
      'Should return 6 vowel and 8 consonants'
    );
    deepEqual(
      getCount('To be a Codewarrior or not to be'),
      { vowels: 12, consonants: 13 },
      'Should return 12 vowel and 13 consonants'
    );
    deepEqual(
      getCount('To Kata or not to Kata'),
      { vowels: 8, consonants: 9 },
      'Should return 8 vowel and 9 consonants'
    );
    deepEqual(
      getCount('aeiou'),
      { vowels: 5, consonants: 0 },
      'Should return 5 vowel and 0 consonants'
    );
  });

  it('Unhappy Tests', () => {
    deepEqual(
      getCount('TEst'),
      { vowels: 1, consonants: 3 },
      'Should return 1 vowel and 3 consonants'
    );
    deepEqual(
      getCount('HEre Is sOme text   '),
      { vowels: 6, consonants: 8 },
      'Should return 6 vowel and 8 consonants'
    );
    deepEqual(
      getCount(),
      { vowels: 0, consonants: 0 },
      'Should return 0 vowel and 0 consonants'
    );
    deepEqual(
      getCount(['To Kata or not to Kata']),
      { vowels: 0, consonants: 0 },
      'Should return 0 vowel and 0 consonants'
    );
    deepEqual(
      getCount(undefined),
      { vowels: 0, consonants: 0 },
      'Should return 0 vowel and 0 consonants'
    );
  });
});

mocha.run();
