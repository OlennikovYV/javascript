function getASCIInumber(str) {
  return str.charCodeAt(0);
}

function uniTotal(string) {
  return [...string].reduce((sum, char) => {
    return sum + getASCIInumber(char);
  }, 0);
}

console.log(uniTotal('')); // 0
console.log(uniTotal('a')); // 97
console.log(uniTotal('b')); // 98
console.log(uniTotal('c')); // 99
console.log(uniTotal('d')); // 100
console.log(uniTotal('e')); // 101
console.log(uniTotal('aaa')); // 291
console.log(uniTotal('Mary Had A Little Lamb')); // 1873
