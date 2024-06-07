const countBits = (num, val) => num.toString('2').split(val).length - 1;

function bitsBattle(numbers) {
  let countsBits = [0, 0];

  for (let num of numbers)
    if (num) countsBits[num % 2] += countBits(num, num % 2);

  let diff = countsBits[0] - countsBits[1];

  return diff > 0 ? 'evens win' : diff < 0 ? 'odds win' : 'tie';
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
