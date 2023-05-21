mocha.setup('bdd');

describe(`Coding Meetup #10 - Higher-Order Functions Series - Create usernames`, function () {
  const equal = chai.assert.equal;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;

  const source = [
    {
      firstName: 'Emily',
      lastName: 'N.',
      country: 'Ireland',
      continent: 'Europe',
      age: 30,
      language: 'Ruby',
    },
    {
      firstName: 'Nor',
      lastName: 'E.',
      country: 'Malaysia',
      continent: 'Asia',
      age: 20,
      language: 'Clojure',
    },
  ];

  const result = [
    {
      firstName: 'Emily',
      lastName: 'N.',
      country: 'Ireland',
      continent: 'Europe',
      age: 30,
      language: 'Ruby',
      username: 'emilyn1990',
    },
    {
      firstName: 'Nor',
      lastName: 'E.',
      country: 'Malaysia',
      continent: 'Asia',
      age: 20,
      language: 'Clojure',
      username: 'nore2000',
    },
  ];

  it('addition', function () {
    deepEqual(addUsername(source), result, 'Not equal');
  });
});

mocha.run();
