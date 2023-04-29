function sumFactorial(arr) {
  function factorial(num) {
    let result = 1;

    while (num > 0) {
      result *= num;
      num -= 1;
    }

    return result;
  }

  return arr.reduce((sum, num) => sum + factorial(num), 0);
}

console.log(sumFactorial([4, 6])); // 744
console.log(sumFactorial([5, 4, 1])); // 145
