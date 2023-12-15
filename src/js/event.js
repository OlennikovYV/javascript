const fibsFizzBuzz = function (n) {
  const arrayFibonacci = [];
  let [prev, next] = [0, 1];

  for (let i = 1; i <= n; i++) {
    [prev, next] = [next, prev + next];

    arrayFibonacci.push(
      prev % 15 == 0
        ? 'FizzBuzz'
        : prev % 3 == 0
        ? 'Fizz'
        : prev % 5 == 0
        ? 'Buzz'
        : prev
    );
  }

  return arrayFibonacci;
};

console.log(fibsFizzBuzz(2));
// [1, 1]

console.log(fibsFizzBuzz(5));
// [1, 1, 2, 'Fizz', 'Buzz']

console.log(fibsFizzBuzz(20));
// [1, 1, 2, 'Fizz', 'Buzz', 8, 13, 'Fizz', 34, 'Buzz',
// 89, 'Fizz', 233, 377, 'Buzz', 'Fizz', 1597, 2584, 4181, 'FizzBuzz']
