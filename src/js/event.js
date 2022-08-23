const f1 = x => x * 2;
const f2 = x => x + 2;
const f3 = x => Math.pow(x, 2);
const f4 = x => x.split('').concat().reverse().join('').split(' ');
const f5 = xs => xs.concat().reverse();
const f6 = xs => xs.join('_');

function chained(functions) {
  return function (x) {
    return functions.reduce((sum, el) => el(sum), x);
  };
}

console.log(chained([f1, f2, f3])(0)); // 4
console.log(chained([f1, f2, f3])(2)); // 36
console.log(chained([f3, f2, f1])(2)); // 12
console.log(chained([f4, f5, f6])('lorem ipsum')); // 'merol_muspi'
