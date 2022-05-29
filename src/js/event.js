function remove(s, n) {
  return s
    .split('')
    .map(el => {
      if (el === '!')
        if (n > 0) {
          n -= 1;
          return '';
        }

      return el;
    })
    .join('');
}

console.log(remove('Hi!', 1)); //  'Hi'
console.log(remove('Hi!', 100)); //  'Hi'
console.log(remove('Hi!!!', 1)); //  'Hi!!'
console.log(remove('Hi!!!', 100)); //  'Hi'
console.log(remove('!Hi', 1)); //  'Hi'
console.log(remove('!Hi!', 1)); //  'Hi!'
console.log(remove('!Hi!', 100)); //  'Hi'
console.log(remove('!!!Hi !!hi!!! !hi', 1)); //  '!!Hi !!hi!!! !hi'
console.log(remove('!!!Hi !!hi!!! !hi', 3)); //  'Hi !!hi!!! !hi'
console.log(remove('!!!Hi !!hi!!! !hi', 5)); //  'Hi hi!!! !hi'
console.log(remove('!!!Hi !!hi!!! !hi', 100)); //  'Hi hi hi'
