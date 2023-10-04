mocha.setup('bdd');

describe(`The Hashtag Generator`, function () {
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

  it('Sample tests', () => {
    equal(
      generateHashtag(''),
      false,
      'Expected an empty string to return false'
    );
    equal(generateHashtag(' '.repeat(200)), false, 'Still an empty string');
    equal(
      generateHashtag('Do We have A Hashtag'),
      '#DoWeHaveAHashtag',
      'Expected a Hashtag (#) at the beginning.'
    );
    equal(
      generateHashtag('Codewars'),
      '#Codewars',
      'Should handle a single word.'
    );
    equal(
      generateHashtag('Codewars Is Nice'),
      '#CodewarsIsNice',
      'Should remove spaces.'
    );
    equal(
      generateHashtag('Codewars is nice'),
      '#CodewarsIsNice',
      'Should capitalize first letters of words.'
    );
    equal(generateHashtag('code' + ' '.repeat(140) + 'wars'), '#CodeWars');
    equal(
      generateHashtag(
        'Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat'
      ),
      false,
      'Should return false if the final word is longer than 140 chars.'
    );
    equal(
      generateHashtag('a'.repeat(139)),
      '#A' + 'a'.repeat(138),
      'Should work'
    );
    equal(generateHashtag('a'.repeat(140)), false, 'Too long');
  });
});

mocha.run();
