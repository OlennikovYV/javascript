function arr2bin(arr) {
  return arr
    .reduce((sum, el) => {
      if (Number.isNaN(el)) return NaN;
      if (Number.isInteger(el)) {
        sum += el;
      }

      return sum;
    }, 0)
    .toString(2);
}

console.log(arr2bin([1, 2])); // '11'
console.log(arr2bin([1, 2, 3, 4, 5])); // '1111'
console.log(arr2bin([1, 10, 100, 1000])); // '10001010111'
console.log(arr2bin([null])); // '0'
console.log(arr2bin([1, null])); // '1'
console.log(arr2bin([true, true, false, 15])); // '1111'
console.log(arr2bin([NaN])); // 'NaN'
console.log(arr2bin([null, 7, 9, null])); // '10000'
console.log(arr2bin([])); // '0'
console.log(arr2bin([2, 2, null, 1])); // '101'
