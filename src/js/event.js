obfuscate = function (email) {
  return email.replace(/[\@\.]/g, el => {
    if (el === '@') return ' [at] ';

    return ' [dot] ';
  });
};

console.log(obfuscate('test@123.com'));
// 'test [at] 123 [dot] com'
console.log(obfuscate('Code_warrior@foo.ac.uk'));
// 'Code_warrior [at] foo [dot] ac [dot] uk'
