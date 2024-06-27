function esrever(str) {
  const reverse = str => str.split('').reverse().join('');

  if (/[!?.]$/.test(str)) {
    const withOutEnd = str.substr(0, str.length - 1);
    return reverse(withOutEnd) + str[str.length - 1];
  } else {
    return reverse(str);
  }
}

console.log(esrever('an Easy one?')); // 'eno ysaE na?'
console.log(esrever('a small lOan OF 1,000,000 $!')); // '$ 000,000,1 FO naOl llams a!'
console.log(esrever('<?> &!.".')); // '".!& >?<.'
console.log(esrever('b3tTer p4ss thIS 0ne.')); // 'en0 SIht ss4p reTt3b.'
console.log(esrever('')); // ''
