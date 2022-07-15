function tidyNumber(n) {
  const arrayDigit = String(n).split('');
  let result = true;

  for (let i = 0; i < arrayDigit.length - 1; i += 1) {
    if (+arrayDigit[i] > +arrayDigit[i + 1]) {
      result = false;
      break;
    }
  }

  return result;
}

console.log(tidyNumber(12)); // true
console.log(tidyNumber(102)); // false
console.log(tidyNumber(9672)); // false
console.log(tidyNumber(2789)); // true
console.log(tidyNumber(2335)); // true
