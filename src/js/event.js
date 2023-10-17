function match(candidate, job) {
  if (!candidate.minSalary || !job.maxSalary) throw Error('Error');

  return candidate.minSalary - candidate.minSalary * 0.1 <= job.maxSalary;
}

let candidate1 = { minSalary: 120000 },
  job1 = { maxSalary: 130000 },
  job2 = { maxSalary: 80000 };

console.log(match(candidate1, job1)); // true
console.log(match(candidate1, job2)); // false
