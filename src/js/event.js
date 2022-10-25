function solution(string, limit) {
  let length = string.length;

  if (length <= limit) return string;

  return string.slice(0, limit) + '...';
}

console.log(solution('Testing String', 3)); // 'Tes...'
console.log(solution('Testing String', 8)); // 'Testing ...'
console.log(solution('Test', 8)); // 'Test'
