function reverseIt(data) {
  if (typeof data == 'number') {
    return +String(data).split('').reverse().join('');
  }
  if (typeof data == 'string') {
    return data.split('').reverse().join('');
  }

  return data;
}

console.log(reverseIt('Hello')); // 'olleH'
console.log(reverseIt(314159)); // 951413
console.log(reverseIt('314159')); // '951413'
console.log(reverseIt([])); // []
