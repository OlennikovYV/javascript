function golfScoreCalculator(parList, scoreList) {
  const parsArray = parList.split('');
  const scoreArray = scoreList.split('');

  return parsArray.reduce(
    (score, par, i) => score + Number(scoreArray[i] - par),
    0
  );
}

console.log(golfScoreCalculator('443454444344544443', '353445334534445344'));
// -1
console.log(golfScoreCalculator('123456123456123456', '123456123456123456'));
// 0
