mocha.setup('bdd');

describe('Coding Meetup #12 - Higher-Order Functions Series - Find GitHub admins', () => {
  it('test', () => {
    const list1 = [
      {
        firstName: 'Harry',
        lastName: 'K.',
        country: 'Brazil',
        continent: 'Americas',
        age: 22,
        language: 'JavaScript',
        githubAdmin: 'yes',
      },
      {
        firstName: 'Kseniya',
        lastName: 'T.',
        country: 'Belarus',
        continent: 'Europe',
        age: 49,
        language: 'Ruby',
        githubAdmin: 'no',
      },
      {
        firstName: 'Jing',
        lastName: 'X.',
        country: 'China',
        continent: 'Asia',
        age: 34,
        language: 'JavaScript',
        githubAdmin: 'yes',
      },
      {
        firstName: 'Piotr',
        lastName: 'B.',
        country: 'Poland',
        continent: 'Europe',
        age: 128,
        language: 'JavaScript',
        githubAdmin: 'no',
      },
    ];

    const answer1 = [
      {
        firstName: 'Harry',
        lastName: 'K.',
        country: 'Brazil',
        continent: 'Americas',
        age: 22,
        language: 'JavaScript',
        githubAdmin: 'yes',
      },
      {
        firstName: 'Jing',
        lastName: 'X.',
        country: 'China',
        continent: 'Asia',
        age: 34,
        language: 'JavaScript',
        githubAdmin: 'yes',
      },
    ];

    chai.expect(findAdmin(list1, 'JavaScript')).to.eql(answer1);
    chai.expect(findAdmin(list1, 'Ruby')).to.eql([]);
    chai.expect(findAdmin(list1, 'Python')).to.eql([]);
  });
});

mocha.run();
