function caffeineBuzz(n) {
  let result = '';

  if (n % 12 === 0) return 'CoffeeScript';
  if (n % 6 === 0) return 'JavaScript';
  if (n % 3 === 0) return 'Java';

  return 'mocha_missing!';
}

console.log(caffeineBuzz(1)); // 'mocha_missing!'
console.log(caffeineBuzz(3)); // 'Java'
console.log(caffeineBuzz(4)); // 'mocha_missing!'
console.log(caffeineBuzz(6)); // 'JavaScript'
console.log(caffeineBuzz(12)); // 'CoffeeScript'
