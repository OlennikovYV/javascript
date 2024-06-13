function nextLetter(str) {
  return str.replace(/[a-zA-Z]/g, function (c) {
    switch (c) {
      case 'z':
        return 'a';
      case 'Z':
        return 'A';
      default:
        return String.fromCharCode(c.charCodeAt(0) + 1);
    }
  });
}

console.log(nextLetter('Zz'));
console.log(nextLetter('My Name Is Zoo')); // 'Nz Obnf Jt App'
console.log(nextLetter('What is your name')); // 'Xibu jt zpvs obnf'
console.log(nextLetter('zOo')); // 'aPp'
