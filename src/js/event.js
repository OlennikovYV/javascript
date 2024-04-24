function nameInStr(str, name) {
  const strLowerCase = str.toLowerCase();
  const nameLowerCase = name.toLowerCase();
  let index = 0;

  for (let i = 0; i < str.length; i++) {
    if (index > nameLowerCase.length) break;
    if (strLowerCase[i] === nameLowerCase[index]) index++;
  }

  return nameLowerCase[index] ? false : true;
}

console.log(nameInStr('Across the rivers', 'chris')); // true
console.log(nameInStr('Next to a lake', 'chris')); // false
console.log(nameInStr('Under a sea', 'chris')); // false
console.log(nameInStr('A crew that boards the ship', 'chris')); // false
console.log(nameInStr('A live son', 'Allison')); // false
