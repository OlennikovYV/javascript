function lowestProduct(input) {
  let array = [...input];

  return input.length < 4
    ? 'Number is too small'
    : Math.min(
        ...array
          .slice(0, -3)
          .reduce(
            (a, c, i) =>
              a.concat(c * array[i + 1] * array[i + 2] * array[i + 3]),
            []
          )
      );
}

console.log(lowestProduct('123456789')); // 24
console.log(lowestProduct('234567899')); // 120
console.log(lowestProduct('2345611117899')); // 1
console.log(lowestProduct('333')); // 'Number is too small'
console.log(lowestProduct('1234111')); // 4
