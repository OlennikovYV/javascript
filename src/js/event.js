const sumDigits = number =>
  number.split('').reduce((sum, digit) => sum + Number(digit), 0);

function orderWeight(strng) {
  let inputStr = strng.split(' ');
  let weightArr = inputStr.map(number => ({
    Weight: number,
    weight: sumDigits(number),
  }));

  return weightArr
    .sort((a, b) => {
      function sortStr(a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
      }

      return a.weight - b.weight || sortStr(a.Weight, b.Weight);
    })
    .map(el => el.Weight)
    .join(' ');
}

console.log(orderWeight('103 123 4444 99 2000'));
// '2000 103 123 4444 99'
console.log(orderWeight('2000 10003 1234000 44444444 9999 11 11 22 123'));
// '11 11 2000 10003 22 123 1234000 44444444 9999'
