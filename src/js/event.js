function compare(s1, s2) {
  const sumASCII = string => {
    let sum = 0;

    if (!string) return 0;

    for (let i = 0; i < string.length; i += 1) {
      const checkChar = /[a-z]/i.test(string[i]);

      if (!checkChar) return 0;

      sum += string[i].toUpperCase().charCodeAt(0);
    }

    return sum;
  };

  return sumASCII(s1) === sumASCII(s2);
}

console.log(compare('AD', 'BC')); // true
console.log(compare('AD', 'DD')); // false
console.log(compare('gf', 'FG')); // true
console.log(compare('Ad', 'DD')); // false
console.log(compare('zz1', '')); // true
console.log(compare('ZzZz', 'ffPFF')); // true
console.log(compare('kl', 'lz')); // false
console.log(compare('!!', '7476')); // true
console.log(compare('##', '1176')); // true

console.log(compare(null, 'BC')); // false
console.log(compare(null, null)); // true
console.log(compare(null, '')); // true
console.log(compare('', '')); // true
