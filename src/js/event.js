function pyramid(n) {
  let result = [];

  for (let i = 1; i <= n; i += 1) {
    const subArray = [];

    for (let j = 1; j <= i; j += 1) {
      subArray.push(1);
    }

    result.push(subArray);
  }

  return result;
}

console.log(pyramid(0)); // []
console.log(pyramid(1)); // [[1]]
console.log(pyramid(2)); // [[1], [1, 1]]
console.log(pyramid(3)); // [[1], [1, 1], [1, 1, 1]]
