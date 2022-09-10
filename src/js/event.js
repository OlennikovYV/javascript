function jumpingNumber(n) {
  let result = true;

  String(n)
    .split('')
    .reduce((prev, curr) => {
      result = result && Math.abs(prev - curr) === 1;

      return curr;
    });

  return result ? 'Jumping!!' : 'Not!!';
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
