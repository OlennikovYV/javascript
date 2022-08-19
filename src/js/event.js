function calc(x) {
  const sum = str =>
    str.split('').reduce((total, char) => total + Number(char), 0);

  const total1 = x.replace(/./g, char => char.charCodeAt(0));
  const total2 = total1.replace(/7/g, '1');

  return sum(total1) - sum(total2);
}

console.log(calc('ABC')); // 6
console.log(calc('abcdef')); // 6
console.log(calc('ifkhchlhfd')); // 6
console.log(calc('aaaaaddddr')); // 30
console.log(calc('jfmgklf8hglbe')); // 6
console.log(calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')); // 96
