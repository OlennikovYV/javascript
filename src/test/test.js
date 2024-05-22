mocha.setup('bdd');

describe(
  `Coding Meetup #17 - Higher-Order Functions` +
    ` Series - Sort by programming language`,
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
    const noError = chai.assert.doesNotThrow;
    const include = chai.assert.include;
    /* Утверждает, что подмножество включено в надмножество в том же порядке,
    начиная с первого элемента в надмножестве. Использует глубокую проверку
    равенства.
    Например: [{b:1},{a:2}] === [{b:1},{a:2}] */
    const includeDeepOrderedMembers = chai.assert.includeDeepOrderedMembers;

    it('test', () => {
      const list1 = [
        {
          firstName: 'Nikau',
          lastName: 'R.',
          country: 'New Zealand',
          continent: 'Oceania',
          age: 39,
          language: 'Ruby',
        },
        {
          firstName: 'Precious',
          lastName: 'G.',
          country: 'South Africa',
          continent: 'Africa',
          age: 22,
          language: 'JavaScript',
        },
        {
          firstName: 'Maria',
          lastName: 'S.',
          country: 'Peru',
          continent: 'Americas',
          age: 30,
          language: 'C',
        },
        {
          firstName: 'Agustin',
          lastName: 'V.',
          country: 'Uruguay',
          continent: 'Americas',
          age: 19,
          language: 'JavaScript',
        },
      ];

      const answer1 = [
        {
          firstName: 'Maria',
          lastName: 'S.',
          country: 'Peru',
          continent: 'Americas',
          age: 30,
          language: 'C',
        },
        {
          firstName: 'Agustin',
          lastName: 'V.',
          country: 'Uruguay',
          continent: 'Americas',
          age: 19,
          language: 'JavaScript',
        },
        {
          firstName: 'Precious',
          lastName: 'G.',
          country: 'South Africa',
          continent: 'Africa',
          age: 22,
          language: 'JavaScript',
        },
        {
          firstName: 'Nikau',
          lastName: 'R.',
          country: 'New Zealand',
          continent: 'Oceania',
          age: 39,
          language: 'Ruby',
        },
      ];

      includeDeepOrderedMembers(sortByLanguage(list1), answer1);

      const list2 = [
        {
          firstName: 'Nikau',
          lastName: 'R.',
          country: 'New Zealand',
          continent: 'Oceania',
          age: 39,
          language: 'Ruby',
        },
        {
          firstName: 'Maria',
          lastName: 'S.',
          country: 'Peru',
          continent: 'Americas',
          age: 30,
          language: 'C',
        },
        {
          firstName: 'Agustin',
          lastName: 'V.',
          country: 'Uruguay',
          continent: 'Americas',
          age: 19,
          language: 'JavaScript',
        },
      ];

      const answer2 = [
        {
          firstName: 'Maria',
          lastName: 'S.',
          country: 'Peru',
          continent: 'Americas',
          age: 30,
          language: 'C',
        },
        {
          firstName: 'Agustin',
          lastName: 'V.',
          country: 'Uruguay',
          continent: 'Americas',
          age: 19,
          language: 'JavaScript',
        },
        {
          firstName: 'Nikau',
          lastName: 'R.',
          country: 'New Zealand',
          continent: 'Oceania',
          age: 39,
          language: 'Ruby',
        },
      ];

      includeDeepOrderedMembers(sortByLanguage(list2), answer2);
    });
  }
);

mocha.run();
