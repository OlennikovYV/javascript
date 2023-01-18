mocha.setup('bdd');

describe('Coding Meetup #14 - Higher-Order Functions Series - Order the food', function () {
  it('test', () => {
    const list1 = [
      {
        firstName: 'Noah',
        lastName: 'M.',
        country: 'Switzerland',
        continent: 'Europe',
        age: 19,
        language: 'C',
        meal: 'vegetarian',
      },
      {
        firstName: 'Anna',
        lastName: 'R.',
        country: 'Liechtenstein',
        continent: 'Europe',
        age: 52,
        language: 'JavaScript',
        meal: 'standard',
      },
      {
        firstName: 'Ramona',
        lastName: 'R.',
        country: 'Paraguay',
        continent: 'Americas',
        age: 29,
        language: 'Ruby',
        meal: 'vegan',
      },
      {
        firstName: 'George',
        lastName: 'B.',
        country: 'England',
        continent: 'Europe',
        age: 81,
        language: 'C',
        meal: 'vegetarian',
      },
    ];

    const answer = { vegetarian: 2, standard: 1, vegan: 1 };

    chai.expect(orderFood(list1)).to.eql(answer);
  });
});

mocha.run();
