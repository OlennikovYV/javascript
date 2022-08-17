function abbreviate(string) {
  let words = string.split(' ');
  let abbreviatePhrase = words.map(el => {
    if (el.includes('-')) {
      return el
        .split('-')
        .map(el => setAbbreviate(el))
        .join('-');
    } else {
      return setAbbreviate(el);
    }
  });

  function setAbbreviate(str) {
    const symbol = [',', '!'];
    let comma = '';

    if (str.length < 4) return str;

    if (symbol.includes(str.slice(-1))) {
      comma = str.slice(-1);
      str = str.slice(0, -1);
    }

    return str.slice(0, 1) + (str.length - 2) + str.slice(-1) + comma;
  }

  return abbreviatePhrase.join(' ');
}

console.log(abbreviate('internationalization')); // 'i18n'
console.log(abbreviate('accessibility')); // 'a11y'
console.log(abbreviate('Accessibility')); // 'A11y'
console.log(abbreviate('elephant-ride')); // 'e6t-r2e'
console.log(
  abbreviate('You need, need not want, to complete this code-wars mission')
); // 'e6t-r2e'
