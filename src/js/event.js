function arr2bin(arr) {
  return (
    arr.every(Number.isInteger) &&
    arr.reduce((sum, number) => sum + number, 0).toString(2)
  );
}

console.log(arr2bin([1, 2])); // '11'
console.log(arr2bin([1, 2, 3, 4, 5])); // '1111'
console.log(arr2bin([1, 10, 100, 1000])); // '10001010111'
console.log(arr2bin([1, 2, 'a'])); // false
console.log(arr2bin([1, 2, 1.2])); // false
