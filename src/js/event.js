function caffeineBuzz(n) {
  let result = '';

  if (n % 3 !== 0) return 'mocha_missing!';

  if (n % 3 === 0 && n % 4 !== 0)
    result += 'Java' + (n % 2 === 0 ? 'Script' : '');
  if (n % 3 === 0 && n % 4 === 0)
    result += 'Coffee' + (n % 2 === 0 ? 'Script' : '');

  return result;
}

console.log(caffeineBuzz(1)); // 'mocha_missing!'
console.log(caffeineBuzz(3)); // 'Java'
console.log(caffeineBuzz(4)); // 'mocha_missing!'
console.log(caffeineBuzz(6)); // 'JavaScript'
console.log(caffeineBuzz(12)); // 'CoffeeScript'
