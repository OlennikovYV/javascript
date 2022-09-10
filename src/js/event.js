function jumpingNumber(n) {
  return String(n)
    .split('')
    .every((el, i, arr) => i === 0 || Math.abs(el - arr[i - 1]) === 1)
    ? 'Jumping!!'
    : 'Not!!';
}

console.log(jumpingNumber(1)); // 'Jumping!!'
console.log(jumpingNumber(7)); // 'Jumping!!'
console.log(jumpingNumber(9)); // 'Jumping!!'
console.log(jumpingNumber(23)); // 'Jumping!!'
console.log(jumpingNumber(32)); // 'Jumping!!'
console.log(jumpingNumber(79)); // 'Not!!'
console.log(jumpingNumber(98)); // 'Jumping!!'
console.log(jumpingNumber(8987)); // 'Jumping!!'
console.log(jumpingNumber(625189)); // 'Not!!'
console.log(jumpingNumber(4343456)); // 'Jumping!!'
console.log(jumpingNumber(98789876)); // 'Jumping!!'
