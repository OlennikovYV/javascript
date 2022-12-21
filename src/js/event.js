function firstToLast(str, c) {
  return str.lastIndexOf(c) - Math.max(0, str.indexOf(c));
}

console.log(firstToLast('ababc', 'a')); // 2
console.log(firstToLast('ababc', 'c')); // 0
console.log(firstToLast('ababc', 'd')); // -1
