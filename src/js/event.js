function howManySmaller(arr, n) {
  let result = 0;
  const arrString = arr.map(num => num.toFixed(2));

  for (let i = 0; i < arrString.length; i += 1) {
    if (arrString[i] < n) result += 1;
  }

  return result;
}

console.log(howManySmaller([1.234, 1.235, 1.228], 1.24)); // 2
console.log(howManySmaller([1.1888, 1.1868, 1.1838], 1.19)); // 1
console.log(howManySmaller([3.1288, 3.1212, 3.1205], 3.1212)); // 2
