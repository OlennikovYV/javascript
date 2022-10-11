function balancedNum(number) {
  let result = 0;
  const strNumber = String(number);
  const length = strNumber.length;

  for (let i = 0; i < length / 2 - 1; i += 1) {
    result += Number(strNumber[i]) - Number(strNumber[length - i - 1]);
  }

  return result === 0 ? 'Balanced' : 'Not Balanced';
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
