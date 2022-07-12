function cubeOdd(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (isNaN(arr[i])) return undefined;
    if (arr[i] % 2 !== 0) result += arr[i] ** 3;
  }

  return result;
}

console.log(cubeOdd([1, 2, 3, 4])); // 28
console.log(cubeOdd([-3, -2, 2, 3])); // 0
console.log(cubeOdd(['a', 12, 9, 'z', 42])); // undefined
