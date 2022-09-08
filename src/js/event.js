function goodVsEvil(good, evil) {
  const battleResults = {
    winGood: 'Good triumphs over Evil',
    winEvil: 'Evil eradicates all trace of Good',
    draw: 'No victor on this battle field',
  };
  const goodSide = {
    0: { name: 'Hobbits', worth: 1 },
    1: { name: 'Mens', worth: 2 },
    2: { name: 'Elves', worth: 3 },
    3: { name: 'Dwarves', worth: 3 },
    4: { name: 'Eagles', worth: 4 },
    5: { name: 'Wizards', worth: 10 },
  };
  const evilSide = {
    0: { name: 'Orcs', worth: 1 },
    1: { name: 'Men', worth: 2 },
    2: { name: 'Wargs', worth: 2 },
    3: { name: 'Goblins', worth: 2 },
    4: { name: 'Uruk Hai', worth: 3 },
    5: { name: 'Trolls', worth: 5 },
    6: { name: 'Wizards', worth: 10 },
  };
  const scoresGoodSide = good
    .split(' ')
    .reduce(
      (scores, count, index) =>
        (scores += goodSide[index].worth * Number(count)),
      0
    );
  const scoresEvilSide = evil
    .split(' ')
    .reduce(
      (scores, count, index) =>
        (scores += evilSide[index].worth * Number(count)),
      0
    );

  return (
    'Battle Result: ' +
    (scoresGoodSide === scoresEvilSide
      ? battleResults['draw']
      : scoresGoodSide > scoresEvilSide
      ? battleResults['winGood']
      : battleResults['winEvil'])
  );
}

console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'));
// 'Battle Result: Evil eradicates all trace of Good'
console.log(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0'));
// 'Battle Result: Good triumphs over Evil'
console.log(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0'));
// 'Battle Result: No victor on this battle field'
