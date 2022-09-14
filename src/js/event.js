function average(scores) {
  return Math.round(scores.reduce((sum, num) => sum + num) / scores.length);
}

let scores = [49, 3, 5, 300, 7];
console.log(average(scores)); // 73

scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores)); // 94
