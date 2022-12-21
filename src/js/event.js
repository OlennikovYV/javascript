function firstToLast(str, c) {
  let first = str.indexOf(c);
  let last = str.lastIndexOf(c);

  if (first === -1) return -1;
  if (first === last) return 0;

  return last - first;
}

console.log(firstToLast('ababc', 'a')); // 2
console.log(firstToLast('ababc', 'c')); // 0
console.log(firstToLast('ababc', 'd')); // -1
