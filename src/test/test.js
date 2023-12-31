mocha.setup('bdd');

describe(`Who let the dogs out?`, function () {
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

  it('test', () => {
    equal(dog_bark_only_if_told_so(true), BARK, 'Should bark only if told so');
    equal(
      dog_bark_only_if_told_so(false),
      SLEEP,
      'Should bark only if told so'
    );
    equal(dog_bark_only_if_told_so(), SLEEP, 'Should bark only if told so');

    equal(
      dog_dont_bark_only_if_told_so(true),
      SLEEP,
      'Should NOT bark only if told so'
    );
    equal(
      dog_dont_bark_only_if_told_so(false),
      BARK,
      'Should NOT bark only if told so'
    );
    equal(
      dog_dont_bark_only_if_told_so(),
      BARK,
      'Should NOT bark only if told so'
    );

    equal(dog_dont_bark_by_default(), SLEEP, 'Should NOT bark by default');
    equal(dog_dont_bark_by_default(false), BARK, 'Should NOT bark if told so');

    equal(dog_bark_by_default(), BARK, 'Should bark by default');
    equal(dog_bark_by_default(false), SLEEP, 'Should NOT bark if told so');
  });
});

mocha.run();
