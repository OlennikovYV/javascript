function noRepeat(str) {
  let countAlpha = str.split('').reduce((count, alpha) => {
    count[alpha] = (count[alpha] || 0) + 1;

    return count;
  }, {});

  for (const alpha in countAlpha) {
    if (countAlpha[alpha] == 1) return alpha;
  }
}

console.log(noRepeat('aabbccdde')); // 'e'
console.log(noRepeat('wxyz')); // 'w'
console.log(noRepeat('testing')); // 'e'
