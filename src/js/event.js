function explode(s) {
  return s.replace(/\d/g, digit => digit.repeat(digit));
}

console.log(explode('312')); //"333122"
console.log(explode('102269')); //"12222666666999999999"
