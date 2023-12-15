const fibsFizzBuzz = function (n) {
  const arrayFibonacci = [1];

  for (let i = 1; i < n; i++) {
    arrayFibonacci[i] = (arrayFibonacci[i - 2] || 0) + arrayFibonacci[i - 1];
  }

  return arrayFibonacci.map(numberFibonacci => {
    let fizzBuzzString = '';

    if (numberFibonacci % 3 === 0) fizzBuzzString += `Fizz`;
    if (numberFibonacci % 5 === 0) fizzBuzzString += `Buzz`;

    return fizzBuzzString ? fizzBuzzString : numberFibonacci;
  });
};

console.log(fibsFizzBuzz(2));
// [1, 1]

console.log(fibsFizzBuzz(5));
// [1, 1, 2, 'Fizz', 'Buzz']

console.log(fibsFizzBuzz(20));
// [1, 1, 2, 'Fizz', 'Buzz', 8, 13, 'Fizz', 34, 'Buzz',
// 89, 'Fizz', 233, 377, 'Buzz', 'Fizz', 1597, 2584, 4181, 'FizzBuzz']
