function bandNameGenerator(str) {
  return str[0] === str[str.length - 1]
    ? `${str[0].toUpperCase()}${str.slice(1).repeat(2)}`
    : `The ${str[0].toUpperCase()}${str.slice(1)}`;
}

console.log(bandNameGenerator('knife')); // 'The Knife'
console.log(bandNameGenerator('tart')); // 'Tartart'
console.log(bandNameGenerator('sandles')); // 'Sandlesandles'
console.log(bandNameGenerator('bed')); // 'The Bed'
