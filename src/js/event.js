function calc(x) {
  let total1 = [...x].reduce((sum, char) => sum + char.charCodeAt(0), '');
  let total2 = total1.replace(/7/g, '1');

  total1 = [...total1].reduce((sum, char) => sum + char.charCodeAt(0), 0);
  total2 = [...total2].reduce((sum, char) => sum + char.charCodeAt(0), 0);

  return total1 - total2;
}

console.log(calc('ABC')); // 6
console.log(calc('abcdef')); // 6
console.log(calc('ifkhchlhfd')); // 6
console.log(calc('aaaaaddddr')); // 30
console.log(calc('jfmgklf8hglbe')); // 6
console.log(calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')); // 96
