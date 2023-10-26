function countGrade(scores) {
  const countScores = func => scores.filter(score => func(score)).length;
  return {
    S: countScores(score => score === 100),
    A: countScores(score => score < 100 && score >= 90),
    B: countScores(score => score < 90 && score >= 80),
    C: countScores(score => score < 80 && score >= 60),
    D: countScores(score => score < 60 && score >= 0),
    X: countScores(score => score === -1),
  };
}

console.log(countGrade([50, 60, 70, 80, 90, 100]));
// { S: 1, A: 1, B: 1, C: 2, D: 1, X: 0}
console.log(countGrade([65, 75, , 85, 85, 95, 100, 100]));
// { S: 2, A: 1, B: 2, C: 2, D: 0, X: 0}
console.log(countGrade([-1, -1, -1, -1, -1, -1]));
// { S: 0, A: 0, B: 0, C: 0, D: 0, X: 6}
