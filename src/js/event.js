function abbreviate(string) {
  return string.replace(
    /\w{4,}/g,
    word => word[0] + (word.length - 2) + word.slice(-1)
  );
}

console.log(abbreviate('internationalization')); // 'i18n'
console.log(abbreviate('accessibility')); // 'a11y'
console.log(abbreviate('Accessibility')); // 'A11y'
console.log(abbreviate('elephant-ride')); // 'e6t-r2e'
console.log(
  abbreviate('You need, need not want, to complete this code-wars mission')
); // 'e6t-r2e'
