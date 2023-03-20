function multiple(x) {
  let answer = '' + (x % 3 == 0 ? 'Bang' : '') + (x % 5 == 0 ? 'Boom' : '');

  return answer ? answer : 'Miss';
}

console.log(multiple(30)); // 'BangBoom'
console.log(multiple(3)); // 'Bang'
console.log(multiple(98)); // 'Miss'
console.log(multiple(65)); // 'Boom'
console.log(multiple(23)); // 'Miss'
console.log(multiple(15)); // 'BangBoom'
