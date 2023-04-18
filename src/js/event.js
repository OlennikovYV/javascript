function convertHashToArray(hash) {
  const result = [];

  for (let key in hash) {
    result.unshift([key, hash[key]]);
  }

  return result.sort((a, b) => a[0].localeCompare(b[0]));
}

console.log(convertHashToArray({ name: 'Jeremy' }));
// [ ['name', 'Jeremy'] ]
console.log(convertHashToArray({ name: 'Jeremy', age: 24 }));
// [ ['age', 24],  ['name', 'Jeremy'] ]);
console.log(
  convertHashToArray({ name: 'Jeremy', age: 24, role: 'Software Engineer' })
);
// [ ['age', 24], ['name', 'Jeremy'], ['role', 'Software Engineer'] ]
console.log(convertHashToArray({ product: 'CodeWars', powerLevelOver: 9000 }));
// [ ['powerLevelOver', 9000], ['product', 'CodeWars'] ]
console.log(convertHashToArray({}));
// []
