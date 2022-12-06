mocha.setup('bdd');

describe('Fizz Buzz', () => {
  it('Should fizzify 10 numbers correctly', function () {
    var expected = [
      1,
      2,
      'Fizz',
      4,
      'Buzz',
      'Fizz',
      7,
      8,
      'Fizz',
      'Buzz',
      11,
      'Fizz',
      13,
      14,
      'FizzBuzz',
    ];
    chai
      .expect(JSON.stringify(fizzbuzz(15)))
      .to.equal(JSON.stringify(expected));
  });
});

mocha.run();
