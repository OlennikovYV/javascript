function bitsBattle(numbers) {
  let odds = numbers.filter(num => num !== 0 && num % 2 === 1);
  let evens = numbers.filter(num => num !== 0 && num % 2 === 0);

  const decToBin = dec => dec.toString(2);
  const counts = (binStr, numStr) =>
    [...binStr].filter(num => num === numStr).length;
  const countsBit = (list, bitStr) =>
    list
      .map(decToBin)
      .map(num => counts(num, bitStr))
      .reduce((sum, count) => sum + count, 0);

  const oddsCounts = countsBit(odds, '1');
  const evensCounts = countsBit(evens, '0');

  if (oddsCounts == evensCounts) return 'tie';

  return oddsCounts > evensCounts ? 'odds win' : 'evens win';
}

function doTest(array, expected) {
  const actual = bitsBattle(array);
  console.log(`for [${array}] expected '${expected}' got '${actual}'`);
}

doTest([5, 3, 14], 'odds win');
doTest([3, 8, 22, 15, 78], 'evens win');
doTest([], 'tie');
doTest([1, 13, 16], 'tie');
doTest([0], 'tie');
doTest([0, 1, 2], 'tie');
