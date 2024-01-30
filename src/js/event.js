const numberFormat = number => {
  return new Intl.NumberFormat('en-US').format(number);
};

console.log(numberFormat(100000)); // '100,000'
console.log(numberFormat(5678545)); // '5,678,545'
