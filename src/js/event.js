function explode(s) {
  return s
    .split('')
    .map(el => el.repeat(Number(el)))
    .join('');
}

console.log(explode('312')); //"333122"
console.log(explode('102269')); //"12222666666999999999"
