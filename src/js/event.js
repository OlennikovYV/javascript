function arrayLowerCase(arr) {
  return arr.map(el => (typeof el === 'string' ? el.toLowerCase() : el));
}

console.log(arrayLowerCase(['Red', 'Green'])); // ['red', 'green']
console.log(arrayLowerCase([1, 'Green'])); // [1, 'green']
