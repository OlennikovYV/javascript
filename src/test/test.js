mocha.setup('bdd');

describe(`Fibonacci's FizzBuzz`, function () {
  const equal = chai.assert.equal;
  const notEqual = chai.assert.notEqual;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isNull = chai.assert.isNull;
  const isTrue = chai.assert.isTrue;
  const isFalse = chai.assert.isFalse;
  const approximately = chai.assert.approximately;
  const oneOf = chai.assert.oneOf;
  const isNotEmpty = chai.assert.isNotEmpty;
  const lengthOf = chai.assert.lengthOf;

  it('should work for a value of 2', function () {
    deepEqual(fibsFizzBuzz(2), [1, 1]);
  });

  it('should work for a value of 5', function () {
    deepEqual(fibsFizzBuzz(5), [1, 1, 2, 'Fizz', 'Buzz']);
  });

  it('should work for a value of 20', function () {
    deepEqual(fibsFizzBuzz(20), [
      1,
      1,
      2,
      'Fizz',
      'Buzz',
      8,
      13,
      'Fizz',
      34,
      'Buzz',
      89,
      'Fizz',
      233,
      377,
      'Buzz',
      'Fizz',
      1597,
      2584,
      4181,
      'FizzBuzz',
    ]);
  });
});

mocha.run();
