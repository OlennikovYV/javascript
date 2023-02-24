function remove(string) {
  let exclamationMarks = '';
  let stringWithoutMarks = '';

  for (let i = 0; i < string.length; i++)
    string[i] === '!'
      ? (exclamationMarks += '!')
      : (stringWithoutMarks += string[i]);

  return stringWithoutMarks + exclamationMarks;
}

console.log(remove('Hi!')); // 'Hi!'
console.log(remove('Hi! Hi!')); // 'Hi Hi!!'
console.log(remove('Hi! Hi! Hi!')); // 'Hi Hi Hi!!!'
console.log(remove('Hi! !Hi Hi!')); // 'Hi Hi Hi!!!'
console.log(remove('Hi! Hi!! Hi!')); // 'Hi Hi Hi!!!!'
