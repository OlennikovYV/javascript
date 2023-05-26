function allNonConsecutive(arr) {
  let current;

  return arr.reduce((listConsecutive, next, index) => {
    if (index == 0) {
      current = next;
      return listConsecutive;
    }

    if (next - current !== 1) listConsecutive.push({ i: index, n: next });
    current = next;

    return listConsecutive;
  }, []);
}

const results = allNonConsecutive([1, 2, 3, 4, 6, 7, 8, 10]);

console.log(allNonConsecutive(results));
// [ { i: 4, n: 6 }, { i: 7, n: 10 } ]
