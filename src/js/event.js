function hiddenWord(num) {
  const code = 'oblietadnm';

  return String(num)
    .split('')
    .map(digit => code[digit])
    .join('');
}

console.log(hiddenWord(637)); // 'aid'
console.log(hiddenWord(7415)); // 'debt'
console.log(hiddenWord(49632)); // 'email'
console.log(hiddenWord(942547)); // 'melted'
