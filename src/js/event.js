function calc(x) {
  return (
    x
      .split('')
      .reduce((sum, char) => sum + char.charCodeAt(0), '')
      .split('')
      .filter(num => num === '7').length * 6
  );
}

console.log(calc('ABC')); // 6
console.log(calc('abcdef')); // 6
console.log(calc('ifkhchlhfd')); // 6
console.log(calc('aaaaaddddr')); // 30
console.log(calc('jfmgklf8hglbe')); // 6
console.log(calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')); // 96
