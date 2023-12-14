function tea42(input) {
  return String(input).replace(/[2]/g, 't');
}

console.log(tea42(2)); // 't'
console.log(tea42('2')); // 't'
console.log(tea42(102)); // '10t'
console.log(tea42('m2')); // 'mt'
console.log(tea42('pre2ty')); // 'pretty'
console.log(tea42('t22222')); // 'tttttt'
