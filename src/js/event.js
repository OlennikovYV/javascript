function golfScoreCalculator(parList, scoreList) {
  return [...scoreList].reduce(
    (result, score, index) => (result += score - parList[index]),
    0
  );
}

console.log(golfScoreCalculator('443454444344544443', '353445334534445344'));
// -1
console.log(golfScoreCalculator('123456123456123456', '123456123456123456'));
// 0
