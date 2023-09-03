function inter(s1, s2) {
  return new Set([...s1].filter(el => s2.has(el)));
}

let A = new Set([1, 2]),
  B = new Set([2, 3]),
  C = new Set([2]),
  AB = inter(A, B);

console.log(inter(A, A)); // {1, 2}
console.log(AB); // {2}
console.log([...AB].sort()); // [2]
console.log(AB instanceof Set); // true
