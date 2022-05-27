function validParentheses(parens) {
  let countPairs = 0;
  const [...arrayParens] = parens;

  for (let i = 0; i < arrayParens.length; i += 1) {
    if (arrayParens[i] === '(') countPairs += 1;
    if (arrayParens[i] === ')') countPairs -= 1;
    if (countPairs < 0) return false;
  }

  return countPairs === 0;
}

console.log(validParentheses('(')); //  false
console.log(validParentheses(')')); //  false
console.log(validParentheses('')); //  true
console.log(validParentheses('()')); //  true
console.log(validParentheses('())')); //  false
console.log(validParentheses('())(')); //  false
