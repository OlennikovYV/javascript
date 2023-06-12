function paul(x) {
  const tablePoints = {
    kata: 5,
    'Petes kata': 10,
    life: 0,
    eating: 1,
  };
  const miseryPoints = x.reduce((sum, point) => sum + tablePoints[point], 0);

  switch (true) {
    case miseryPoints < 40:
      return 'Super happy!';
    case miseryPoints < 70:
      return 'Happy!';
    case miseryPoints < 100:
      return 'Sad!';

    default:
      return 'Miserable!';
  }
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
