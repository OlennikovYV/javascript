function solution(a, b) {
  const short = a.length < b.length ? a : b;
  const long = a.length > b.length ? a : b;
  return `${short}${long}${short}`;
}

console.log(solution('45', '1')); // '1451'
console.log(solution('13', '200')); // '1320013'
console.log(solution('Soon', 'Me')); // 'MeSoonMe'
console.log(solution('U', 'False')); // 'UFalseU'
