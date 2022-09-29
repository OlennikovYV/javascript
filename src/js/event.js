function initializeNames(name) {
  return name
    .split(' ')
    .map((name, i, arr) =>
      i === 0 || i === arr.length - 1 ? name : name[0] + '.'
    )
    .join(' ');
}

console.log(initializeNames('Jack Ryan')); // 'Jack Ryan'
console.log(initializeNames('Lois Mary Lane')); // 'Lois M. Lane'
console.log(initializeNames('Dimitri')); // 'Dimitri'
console.log(initializeNames('Alice Betty Catherine Davis')); // 'Alice B. C. Davis'
