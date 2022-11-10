function createDict(keys, values) {
  return keys.reduce((dict, key, index) => {
    dict[key] = values[index] == undefined ? null : values[index];
    return dict;
  }, {});
}

console.log(createDict(['a', 'b', 'c'], [1, 2, 3]));
// {a: 1, b: 2, c: 3}
console.log(createDict(['a', 'b', 'c'], [1, 2, 3, 4]));
// {a: 1, b: 2, c: 3}
console.log(createDict(['a', 'b', 'c', 'd'], [1, 2, 3]));
// {a: 1, b: 2, c: 3, d: null}
