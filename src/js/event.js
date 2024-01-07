function isOpposite(s1, s2) {
  const convertCase = string =>
    string
      .split('')
      .map(el =>
        el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()
      )
      .join('');

  return s1.length === 0 && s1.length === 0
    ? false
    : s1 === convertCase(s2)
    ? true
    : false;
}

console.log(isOpposite('ab', 'AB')); // true
console.log(isOpposite('aB', 'Ab')); // true
console.log(isOpposite('aBcd', 'AbCD')); // true
console.log(isOpposite('aBcde', 'AbCD')); // false
console.log(isOpposite('AB', 'Ab')); // false
console.log(isOpposite('', '')); // false
