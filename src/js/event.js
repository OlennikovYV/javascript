function scoreTest(str, right, omit, wrong) {
  return str.reduce((totalScore, answer) => {
    if (answer === 0) totalScore += right;
    if (answer === 1) totalScore += omit;
    if (answer === 2) totalScore -= wrong;

    return totalScore;
  }, 0);
}

console.log(scoreTest([0, 0, 0, 0, 2, 1, 0], 2, 0, 1)); // 9
console.log(scoreTest([0, 1, 0, 0, 2, 1, 0, 2, 2, 1], 3, -1, 2)); // 3
