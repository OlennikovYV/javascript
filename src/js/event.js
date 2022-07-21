function grader(score) {
  if (score > 1 || score < 0.6) return 'F';
  if (score < 0.7) return 'D';
  if (score < 0.8) return 'C';
  if (score < 0.9) return 'B';
  return 'A';
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
