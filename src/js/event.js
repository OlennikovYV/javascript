function cutIt(arr) {
  const minString = arr.reduce(
    (length, str) => (str.length < length ? str.length : length),
    Number.MAX_VALUE
  );

  return arr.map(str => str.slice(0, minString));
}

console.log(cutIt(['ab', 'cde', 'fgh']));
// ['ab', 'cd', 'fg']
console.log(cutIt(['abc', 'defgh', 'ijklmn']));
// ['abc', 'def', 'ijk']
console.log(cutIt(['codewars', 'javascript', 'java']));
// ['code', 'java', 'java']
