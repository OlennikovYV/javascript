function eachCons(array, n) {
  let result = [];

  for (let i = 0; i < array.length - n + 1; i += 1)
    result.push(array.slice(i, i + n));

  return result;
}

const lst = [3, 5, 8, 13];

console.log(eachCons(lst, 1)); // [[3], [5], [8], [13]]

console.log(eachCons(lst, 2));
// [ [3, 5], [5, 8], [8, 13] ]

console.log(eachCons(lst, 3));
// [ [3, 5, 8], [5, 8, 13] ]

console.log(eachCons([], 3)); // []
