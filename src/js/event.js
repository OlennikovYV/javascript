function keysAndValues(data) {
  let result = [[], []];

  for (let key in data) {
    result[0].push(key);
    result[1].push(data[key]);
  }

  return result;
}

console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
// [ ['a', 'b', 'c'], [1, 2, 3] ]
console.log(keysAndValues({})); // [[], []]
console.log(keysAndValues({ 1: 'a', 2: 'b', 3: 'c' }));
// [ ['1', '2', '3'], ['a', 'b', 'c'], ]
