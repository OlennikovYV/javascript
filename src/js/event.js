function reverseIt(data) {
  switch (typeof data) {
    case 'string':
      return data.split('').reverse().join('');
    case 'number':
      return +String(data).split('').reverse().join('');
    default:
      return data;
  }
}

console.log(reverseIt('Hello')); // 'olleH'
console.log(reverseIt(314159)); // 951413
console.log(reverseIt('314159')); // '951413'
console.log(reverseIt([])); // []
