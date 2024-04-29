function solve(a, b) {
  const results = a.reduce(
    (wins, _, index) => {
      if (a[index] === b[index]) return wins;

      a[index] > b[index] ? (wins[0] += 1) : (wins[1] += 1);

      return wins;
    },
    [0, 0]
  );
  const check = results.join(', ');

  if (results[0] === results[1])
    return check + ': that looks like a "draw"! Rock on!';

  if (results[0] > results[1]) return check + ': Alice made "Kurt" proud!';

  if (results[0] < results[1]) return check + ': Bob made "Jeff" proud!';
}

console.log(solve([47, 7, 2], [47, 7, 2]));
// '0, 0: that looks like a "draw"! Rock on!'
console.log(solve([47, 67, 22], [26, 47, 12]));
// '3, 0: Alice made "Kurt" proud!'
console.log(solve([25, 50, 22], [34, 49, 50]));
// '1, 2: Bob made "Jeff" proud!'
