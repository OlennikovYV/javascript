function solution(pairs) {
  const result = [];

  for (let key in pairs) {
    result.push(`${key} = ${pairs[key]}`);
  }

  return result.join(',');
}

console.log(solution({ a: 1, b: '2' })); // should return "a = 1,b = 2"
console.log(solution({ a: 1 })); // should return "a = 1"
console.log(solution({ a: 2, b: 4, c: '8' })); // should return "a = 2,b = 4,c = 8"
