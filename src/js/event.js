function esrever(str) {
  return str.slice(0, -1).split('').reverse().join('') + str.slice(-1);
}

console.log(esrever('an Easy one?')); // 'eno ysaE na?'
console.log(esrever('a small lOan OF 1,000,000 $!')); // '$ 000,000,1 FO naOl llams a!'
console.log(esrever('<?> &!.".')); // '".!& >?<.'
console.log(esrever('b3tTer p4ss thIS 0ne.')); // 'en0 SIht ss4p reTt3b.'
console.log(esrever('')); // ''
