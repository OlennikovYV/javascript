function remove(string) {
  let result = '';
  let last = true;

  for (let i = string.length - 1; i >= 0; i -= 1) {
    if (last && string[i] == '!') {
      result = '!' + result;
      continue;
    }
    last = false;
    if (string[i] != '!') result = string[i] + result;
  }

  return result;
}

console.log(remove('Hi!')); // 'Hi!'
console.log(remove('Hi!!!')); // 'Hi!!!'
console.log(remove('!Hi')); // 'Hi'
console.log(remove('!Hi!')); // 'Hi!'
console.log(remove('Hi! Hi!')); // 'Hi Hi!'
console.log(remove('Hi')); // 'Hi'
