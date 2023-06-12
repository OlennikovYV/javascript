function paul(x) {
  let miseryPoints = 0;

  function calcMiseryPoint(arr) {
    const tablePoints = {
      kata: 5,
      'Petes kata': 10,
      life: 0,
      eating: 1,
    };

    return arr.reduce((sum, point) => sum + tablePoints[point], 0);
  }

  miseryPoints = calcMiseryPoint(x);

  if (miseryPoints < 40) return 'Super happy!';
  if (miseryPoints < 70) return 'Happy!';
  if (miseryPoints < 100) return 'Sad!';

  return 'Miserable!';
}

console.log(paul(['life', 'eating', 'life']));
// 'Super happy!'
console.log(paul(['life', 'Petes kata', 'Petes kata', 'Petes kata', 'eating']));
// 'Super happy!'
console.log(
  paul([
    'Petes kata',
    'Petes kata',
    'eating',
    'Petes kata',
    'Petes kata',
    'eating',
  ])
);
// 'Happy!'
