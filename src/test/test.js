mocha.setup('bdd');

describe(
  `Coding Meetup #4 - Higher-Order Functions Series` +
    ` - Find the first Python developer`,
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
          firstName: 'Mark',
          lastName: 'G.',
          country: 'Scotland',
          continent: 'Europe',
          age: 22,
          language: 'JavaScript',
        },
        {
          firstName: 'Victoria',
          lastName: 'T.',
          country: 'Puerto Rico',
          continent: 'Americas',
          age: 30,
          language: 'Python',
        },
        {
          firstName: 'Emma',
          lastName: 'B.',
          country: 'Norway',
          continent: 'Europe',
          age: 19,
          language: 'Clojure',
        },
      ];

      const list2 = [
        {
          firstName: 'Kseniya',
          lastName: 'T.',
          country: 'Belarus',
          continent: 'Europe',
          age: 29,
          language: 'JavaScript',
        },
        {
          firstName: 'Amar',
          lastName: 'V.',
          country: 'Bosnia and Herzegovina',
          continent: 'Europe',
          age: 32,
          language: 'Ruby',
        },
      ];

      strictEqual(getFirstPython(list1), 'Victoria, Puerto Rico');
      strictEqual(getFirstPython(list2), 'There will be no Python developers');
    });
  }
);

mocha.run();
