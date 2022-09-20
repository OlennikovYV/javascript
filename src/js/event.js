function insertDash(num) {
  return String(num).replace(/[13579](?=[13579])/g, '$&-');
}

console.log(insertDash(454793)); // '4547-9-3'
console.log(insertDash(123456)); // '123456'
console.log(insertDash(1003567)); // '1003-567'
