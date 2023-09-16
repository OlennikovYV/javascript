var hotpo = function (n) {
  let count = 0;
  let number = n;

  while (number > 1) {
    const isOdd = number % 2;
    if (isOdd) number = 3 * number + 1;
    if (!isOdd) number /= 2;

    count++;
  }

  return count;
};

console.log(hotpo(0)); // 0
console.log(hotpo(1)); // 0
console.log(hotpo(5)); // 5
console.log(hotpo(6)); // 8
console.log(hotpo(23)); // 15
