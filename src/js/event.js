function tidyNumber(n) {
  const arrayDigit = String(n).split('');
  arrayDigit.sort();

  return arrayDigit.join('') == n;
}

console.log(tidyNumber(12)); // true
console.log(tidyNumber(102)); // false
console.log(tidyNumber(9672)); // false
console.log(tidyNumber(2789)); // true
console.log(tidyNumber(2335)); // true
