function replaceNth(text, n, oldValue, newValue) {
  let count = 0;

  return n < 1
    ? text
    : text.replace(new RegExp(oldValue, 'g'), char =>
        ++count % n ? char : newValue
      );
}

console.log(replaceNth('Vader said: No, I am your father!', 2, 'a', 'o'));
// 'Vader soid: No, I am your fother!'
console.log(replaceNth('Vader said: No, I am your father!', 4, 'a', 'o'));
// 'Vader said: No, I am your fother!'
console.log(replaceNth('Vader said: No, I am your father!', 6, 'a', 'o'));
// 'Vader said: No, I am your father!'
console.log(replaceNth('Vader said: No, I am your father!', 0, 'a', 'o'));
// 'Vader said: No, I am your father!'
console.log(replaceNth('Vader said: No, I am your father!', -2, 'a', 'o'));
// 'Vader said: No, I am your father!'
console.log(replaceNth('Vader said: No, I am your father!', 1, 'i', 'y'));
// 'Vader sayd: No, I am your father!'
console.log(replaceNth('Luke cries: Noooooooooooooooo!', 6, 'o', 'i'));
// 'Luke cries: Noooooioooooioooo!'
