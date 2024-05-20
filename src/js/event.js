obfuscate = function (email) {
  const regex = new RegExp(/[.@]/g);
  const replacers = { '@': 'at', '.': 'dot' };

  return email.replace(regex, el => ` [${replacers[el]}] `);
};

console.log(obfuscate('test@123.com'));
// 'test [at] 123 [dot] com'
console.log(obfuscate('Code_warrior@foo.ac.uk'));
// 'Code_warrior [at] foo [dot] ac [dot] uk'
