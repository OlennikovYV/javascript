function toNumberArray(stringarray) {
  return stringarray.map(str => Number(str));
}

console.log(toNumberArray(['1.1', '2.2', '3.3']));
// [1.1, 2.2, 3.3]
