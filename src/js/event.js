function findDup(arr) {
  let dup;
  const sortArr = arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (i + 1 !== arr[i]) {
      dup = arr[i];
      break;
    }
  }

  return dup;
}

console.log(findDup([1, 2, 2, 3])); // 2
console.log(findDup([1, 3, 2, 5, 4, 5, 7, 6])); // 5
