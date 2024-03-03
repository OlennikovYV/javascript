function getDecimal(n) {
  let decimal = String(n).split('.')[1];

  decimal = decimal ? decimal : 0;

  return Number('0.' + decimal);
}

console.log(getDecimal(10)); // 0
console.log(getDecimal(-1.2)); // 0.2
console.log(getDecimal(4.5)); // 0.5
console.log(getDecimal(9.908687e-1)); // 0.9908687
