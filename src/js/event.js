function strCount(str, letter) {
  const regExp = new RegExp(letter, 'g');

  return (str.match(regExp) || []).length;
}

console.log(strCount('Hello', 'o')); // 1
console.log(strCount('Hello', 'l')); // 2
console.log(strCount('', 'z')); // 0
