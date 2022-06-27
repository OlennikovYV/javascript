function maxRot(n) {
  const tempDigit = [];
  let result = [];
  let digit = String(n).split('');
  const length = digit.length;
  result.push([...digit]);
  for (let i = 0; i < length; i += 1) {
    const num = digit.shift();
    digit.push(num);
    result.push([...tempDigit, ...digit]);
    tempDigit.push(digit.shift());
    result.push([...tempDigit, ...digit]);
  }

  result = result.map(el => +el.join(''));

  return Math.max(...result);
}

console.log(maxRot(38458215)); // 85821534
console.log(maxRot(195881031)); // 988103115
console.log(maxRot(896219342)); // 962193428
console.log(maxRot(69418307)); // 94183076
console.log(maxRot(507992495)); // 99249557
