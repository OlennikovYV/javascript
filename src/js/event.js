function copyList(l) {
  return [...l];
}

const t = [1, 2, 3, 4];
tCopy = copyList(t);

console.log(t); // [1, 2, 3, 4]
t[1] += 5;
console.log(t); // [1, 7, 3, 4]
console.log(tCopy); // [1, 2, 3, 4]
