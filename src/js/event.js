function solution(pairs) {
  return Object.keys(pairs)
    .map(key => `${key} = ${pairs[key]}`)
    .join(',');
}

console.log(solution({ a: 1, b: '2' })); // should return "a = 1,b = 2"
console.log(solution({ a: 1 })); // should return "a = 1"
console.log(solution({ a: 2, b: 4, c: '8' })); // should return "a = 2,b = 4,c = 8"
