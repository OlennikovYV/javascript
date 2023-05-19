function sortDict(dict) {
  return Array.from(Object.entries(dict))
    .map(el => {
      el[0] = isNaN(el[0]) ? el[0] : Number(el[0]);
      return el;
    })
    .sort((a, b) => b[1] - a[1]);
}

console.log(sortDict({ 1: 3, 2: 2, 3: 1 }));
// [ [1, 3], [2, 2], [3, 1] ]
console.log(sortDict({ 3: 1, 2: 2, 1: 3 }));
// [ [1, 3], [2, 2], [3, 1] ]
console.log(sortDict({ 1: 2, 2: 4, 3: 6 }));
// [ [3, 6], [2, 4], [1, 2] ]
console.log(sortDict({ 1: 5, 3: 10, 2: 2, 6: 3, 8: 8 }));
// [ [3, 10], [8, 8], [1, 5], [6, 3], [2, 2] ]
console.log(sortDict({ a: 6, b: 2, c: 4 }));
// [ ['a', 6], ['c', 4], ['b', 2] ]
console.log(sortDict({ aldo: 6, boris: 2, igor: 6 }));
// [ ['aldo', 6], ['igor', 6], ['boris', 2] ]
