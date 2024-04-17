const findMissing = function (list) {
  const firstDiff = list[1] - list[0];
  const twoDiff = list[2] - list[1];
  const diff = Math.abs(firstDiff) <= Math.abs(twoDiff) ? firstDiff : twoDiff;
  let lost;

  for (let i = 0; i < list.length; i++) {
    const currentDiff = list[i + 1] - list[i];

    if (currentDiff !== diff) return list[i] + diff;
  }
};

console.log(findMissing([0, -2, -3])); // -1
console.log(findMissing([-7, -9, -10])); // -8
console.log(findMissing([1, 3, 4])); // 2
