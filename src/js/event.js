function countGrade(scores) {
  const countScores = (min, max) =>
    scores.filter(score => min <= score && score < max).length;
  return {
    S: countScores(100, 101),
    A: countScores(90, 100),
    B: countScores(80, 90),
    C: countScores(60, 80),
    D: countScores(0, 60),
    X: countScores(-1, 0),
  };
}

console.log(countGrade([50, 60, 70, 80, 90, 100]));
// { S: 1, A: 1, B: 1, C: 2, D: 1, X: 0}
console.log(countGrade([65, 75, , 85, 85, 95, 100, 100]));
// { S: 2, A: 1, B: 2, C: 2, D: 0, X: 0}
console.log(countGrade([-1, -1, -1, -1, -1, -1]));
// { S: 0, A: 0, B: 0, C: 0, D: 0, X: 6}
