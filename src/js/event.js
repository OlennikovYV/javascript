function allNonConsecutive(arr) {
  let listConsecutive = [];

  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] - arr[i - 1] !== 1) listConsecutive.push({ i: i, n: arr[i] });
  }

  return listConsecutive;
}

const results = allNonConsecutive([1, 2, 3, 4, 6, 7, 8, 10]);

console.log(allNonConsecutive(results));
// [ { i: 4, n: 6 }, { i: 7, n: 10 } ]
