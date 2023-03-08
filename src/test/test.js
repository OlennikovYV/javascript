mocha.setup('bdd');

describe('Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?', function () {
  it('test', () => {
    var list1 = [
      {
        firstName: 'Sofia',
        lastName: 'I.',
        country: 'Argentina',
        continent: 'Americas',
        age: 35,
        language: 'Java',
      },
      {
        firstName: 'Lukas',
        lastName: 'X.',
        country: 'Croatia',
        continent: 'Europe',
        age: 35,
        language: 'Python',
      },
      {
        firstName: 'Madison',
        lastName: 'U.',
        country: 'United States',
        continent: 'Americas',
        age: 32,
        language: 'Ruby',
      },
    ];

    var list2 = [
      {
        firstName: 'Sofia',
        lastName: 'I.',
        country: 'Argentina',
        continent: 'Americas',
        age: 35,
        language: 'Java',
      },
      {
        firstName: 'Lukas',
        lastName: 'X.',
        country: 'Croatia',
        continent: 'Europe',
        age: 35,
        language: 'Python',
      },
    ];

    chai.expect(isRubyComing(list1)).to.equal(true);
    chai.expect(isRubyComing(list2)).to.equal(false);
  });
});

mocha.run();
