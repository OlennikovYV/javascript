function goodVsEvil(good, evil) {
  function getWorths(countsSide, scoresWorth) {
    return countsSide
      .split(' ')
      .reduce(
        (scores, count, index) =>
          (scores += scoresWorth[index] * Number(count)),
        0
      );
  }

  const worths = {
    goodSide: [1, 2, 3, 3, 4, 10],
    evilSide: [1, 2, 2, 2, 3, 5, 10],
  };

  const scoresGoodSide = getWorths(good, worths['goodSide']);
  const scoresEvilSide = getWorths(evil, worths['evilSide']);

  return (
    'Battle Result: ' +
    (scoresGoodSide === scoresEvilSide
      ? 'No victor on this battle field'
      : scoresGoodSide > scoresEvilSide
      ? 'Good triumphs over Evil'
      : 'Evil eradicates all trace of Good')
  );
}

console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'));
// 'Battle Result: Evil eradicates all trace of Good'
console.log(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0'));
// 'Battle Result: Good triumphs over Evil'
console.log(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0'));
// 'Battle Result: No victor on this battle field'
