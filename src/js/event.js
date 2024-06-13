function nextLetter(str) {
  const lowerA = 97;
  const upperA = 65;

  return str
    .split('')
    .map(char => {
      const isUpperCase = char === char.toUpperCase();
      const nextCodeChar = char.charCodeAt(0) + 1;

      if (!/\w/g.test(char)) return char;
      if (isUpperCase)
        return String.fromCharCode(((nextCodeChar % upperA) % 26) + upperA);

      return String.fromCharCode(((nextCodeChar % lowerA) % 26) + lowerA);
    })
    .join('');
}

console.log(nextLetter('Zz'));
console.log(nextLetter('My Name Is Zoo')); // 'Nz Obnf Jt App'
console.log(nextLetter('What is your name')); // 'Xibu jt zpvs obnf'
console.log(nextLetter('zOo')); // 'aPp'
