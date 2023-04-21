function noRepeat(str) {
  return Array.from(str).find(
    (alpha, _, arr) => arr.indexOf(alpha) == arr.lastIndexOf(alpha)
  );
}

console.log(noRepeat('aabbccdde')); // 'e'
console.log(noRepeat('wxyz')); // 'w'
console.log(noRepeat('testing')); // 'e'
