function firstToLast(str, c) {
  let first = str.indexOf(c);
  let last = str.lastIndexOf(c);

  return first === -1 ? -1 : last - first;
}

console.log(firstToLast('ababc', 'a')); // 2
console.log(firstToLast('ababc', 'c')); // 0
console.log(firstToLast('ababc', 'd')); // -1
