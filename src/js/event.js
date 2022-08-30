function balance(left, right) {
  const getWeight = mark =>
    [...mark].reduce((sumWeight, weight) => {
      if (weight === '!') sumWeight += 2;
      if (weight === '?') sumWeight += 3;

      return sumWeight;
    }, 0);
  const leftWeight = getWeight(left);
  const rightWeight = getWeight(right);

  if (leftWeight === rightWeight) return 'Balance';

  return leftWeight > rightWeight ? 'Left' : 'Right';
}

console.log(balance('!!', '??')); // 'Right'
console.log(balance('!??', '?!!')); // 'Left'
console.log(balance('!?!!', '?!?')); // 'Left'
console.log(balance('!!???!????', '??!!?!!!!!!!')); // 'Balance'
