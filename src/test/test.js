mocha.setup('bdd');

describe(`Coding Meetup #11 - Higher-Order Functions Series - Find the average age`, function () {
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

  it('test', () => {
    const list1 = [
      {
        firstName: 'Maria',
        lastName: 'Y.',
        country: 'Cyprus',
        continent: 'Europe',
        age: 30,
        language: 'Java',
      },
      {
        firstName: 'Victoria',
        lastName: 'T.',
        country: 'Puerto Rico',
        continent: 'Americas',
        age: 70,
        language: 'Python',
      },
    ];

    equal(getAverageAge(list1), 50);

    const list2 = [
      {
        firstName: 'Noa',
        lastName: 'A.',
        country: 'Israel',
        continent: 'Asia',
        age: 20,
        language: 'Ruby',
      },
      {
        firstName: 'Andrei',
        lastName: 'E.',
        country: 'Romania',
        continent: 'Europe',
        age: 21,
        language: 'C',
      },
    ];

    equal(getAverageAge(list2), 21);
  });
});

mocha.run();
