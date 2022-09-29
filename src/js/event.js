function initializeNames(name) {
  return name.replace(/ (\w)\w*(?= )/g, ' $1.');
}

console.log(initializeNames('Jack Ryan')); // 'Jack Ryan'
console.log(initializeNames('Lois Mary Lane')); // 'Lois M. Lane'
console.log(initializeNames('Dimitri')); // 'Dimitri'
console.log(initializeNames('Alice Betty Catherine Davis')); // 'Alice B. C. Davis'
