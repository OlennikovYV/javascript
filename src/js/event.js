function reverseSlice(str) {
  const reverseStr = [...str].reverse();

  return reverseStr.map((_, i, arr) => arr.slice(i).join(''));
}

console.log(reverseSlice('123')); // ['321', '21', '1']
console.log(reverseSlice('abcde'));
// [
//   'edcba',
//   'dcba',
//   'cba',
//   'ba',
//   'a',
// ]
