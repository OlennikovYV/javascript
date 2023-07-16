function factory(x) {
  return function (array) {
    return array.map(element => element * x);
  };
}

const myArray = [1, 2, 3];

const threes = factory(3);
console.log(threes(myArray)); // [3, 6, 9]

const fives = factory(5);
console.log(fives(myArray)); // [5, 10, 15]
