function last(...list) {
  let arg = Array.from(list);

  if (typeof arg[0] === 'string' && arg.length < 2) arg = Array.from(arg[0]);
  if (typeof arg[0] === 'object') arg = Object.values(arg[0]);

  return arg[arg.length - 1];
}

console.log(last([1, 2, 3, 4, 5])); // 5
console.log(last('abcde')); // 'e'
console.log(last(1, 'b', 3, 'd', 5)); // 5
console.log(last({ 0: 5, 1: 4 })); // 4
console.log(last('a', 'b', 'c', 'z')); // 4
