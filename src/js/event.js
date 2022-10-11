function balancedNum(number) {
  const strNumber = String(number);
  const odd = strNumber.length % 2;
  const halfString = strNumber.length >> 1;
  let left, right;

  function sum(str) {
    return str.split('').reduce((sum, digit) => sum + Number(digit), 0);
  }

  if (strNumber.length < 3) return 'Balanced';

  if (odd) {
    left = strNumber.slice(0, halfString);
    right = strNumber.slice(halfString + 1);
  }

  if (!odd) {
    left = strNumber.slice(0, halfString - 1);
    right = strNumber.slice(halfString + 1);
  }

  return sum(left) === sum(right) ? 'Balanced' : 'Not Balanced';
}

console.log(balancedNum(7)); // 'Balanced'
console.log(balancedNum(959)); // 'Balanced'
console.log(balancedNum(13)); // 'Balanced'
console.log(balancedNum(432)); // 'Not Balanced'
console.log(balancedNum(424)); // 'Balanced'
console.log(balancedNum(1024)); // 'Not Balanced'
console.log(balancedNum(66545)); // 'Not Balanced'
console.log(balancedNum(295591)); // 'Not Balanced'
console.log(balancedNum(1230987)); // 'Not Balanced'
console.log(balancedNum(56239814)); // 'Balanced'
