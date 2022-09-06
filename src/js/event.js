function product(string) {
  let countExclamation = (string.match(/\!/g) || []).length;
  let countQuestion = (string.match(/\?/g) || []).length;

  return countExclamation * countQuestion;
}

console.log(product('')); // 0
console.log(product('!')); // 0
console.log(product('!!')); // 0
console.log(product('!??')); // 2
console.log(product('!???')); // 3
console.log(product('!!!??')); // 6
console.log(product('!!!???')); // 9
console.log(product('!???!!')); // 9
console.log(product('!ab? ?')); // 2
console.log(product('!????!!!?')); // 20
