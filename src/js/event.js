function grader(score) {
  let ball;

  switch (true) {
    case score < 0.6:
    case score > 1:
      ball = 'F';
      break;
    case score < 0.7:
      ball = 'D';
      break;
    case score < 0.8:
      ball = 'C';
      break;
    case score < 0.9:
      ball = 'B';
      break;
    case score <= 1:
      ball = 'A';
      break;
  }

  return ball;
}

console.log(grader(0)); // 'F'
console.log(grader(0.6)); // 'D'
console.log(grader(0.65)); // 'D'
console.log(grader(0.7)); // 'C'
console.log(grader(0.73)); // 'C'
console.log(grader(0.8)); // 'B'
console.log(grader(0.87)); // 'B'
console.log(grader(0.9)); // 'A'
console.log(grader(0.99)); // 'A'
console.log(grader(1)); // 'A'
console.log(grader(1.1)); // 'F'
