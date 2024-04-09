mocha.setup('bdd');

describe(
  `Coding Meetup #6 - Higher-Order Functions ` +
    `Series - Can they code in the same language?`,
  function () {
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

    it('test', () => {
      const list1 = [
        {
          firstName: 'Daniel',
          lastName: 'J.',
          country: 'Aruba',
          continent: 'Americas',
          age: 42,
          language: 'JavaScript',
        },
        {
          firstName: 'Kseniya',
          lastName: 'T.',
          country: 'Belarus',
          continent: 'Europe',
          age: 22,
          language: 'JavaScript',
        },
        {
          firstName: 'Hanna',
          lastName: 'L.',
          country: 'Hungary',
          continent: 'Europe',
          age: 65,
          language: 'JavaScript',
        },
      ];

      const list2 = [
        {
          firstName: 'Mariami',
          lastName: 'G.',
          country: 'Georgia',
          continent: 'Europe',
          age: 29,
          language: 'Python',
        },
        {
          firstName: 'Mia',
          lastName: 'H.',
          country: 'Germany',
          continent: 'Europe',
          age: 39,
          language: 'Ruby',
        },
        {
          firstName: 'Maria',
          lastName: 'I.',
          country: 'Greece',
          continent: 'Europe',
          age: 32,
          language: 'C',
        },
      ];

      isTrue(isSameLanguage(list1), true);
      isFalse(isSameLanguage(list2), false);
    });
  }
);

mocha.run();
