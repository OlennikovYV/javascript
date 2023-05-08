mocha.setup('bdd');

describe(`Coding Meetup #15 - Higher-Order Functions Series - Find the odd names`, function () {
  const assert = chai.assert.deepEqual;

  it('test', () => {
    var list1 = [
      {
        firstName: 'Aba',
        lastName: 'N.',
        country: 'Ghana',
        continent: 'Africa',
        age: 21,
        language: 'Python',
      },
      {
        firstName: 'Abb',
        lastName: 'O.',
        country: 'Israel',
        continent: 'Asia',
        age: 39,
        language: 'Java',
      },
    ];

    var answer1 = [
      {
        firstName: 'Abb',
        lastName: 'O.',
        country: 'Israel',
        continent: 'Asia',
        age: 39,
        language: 'Java',
      },
    ];

    assert(findOddNames(list1), answer1);

    var list2 = [
      {
        firstName: 'Aba',
        lastName: 'N.',
        country: 'Ghana',
        continent: 'Africa',
        age: 21,
        language: 'Python',
      },
    ];

    var answer2 = [];

    assert(findOddNames(list2), answer2);
  });
});

mocha.run();
