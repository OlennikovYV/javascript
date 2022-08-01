function divCon(x) {
  return x.reduce((sum, digit) => {
    if (typeof digit === 'string') sum -= Number(digit);
    if (typeof digit === 'number') sum += digit;

    return sum;
  }, 0);
}

console.log(divCon([9, 3, '7', '3'])); // 2
console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7])); // 14
console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0'])); // 13
