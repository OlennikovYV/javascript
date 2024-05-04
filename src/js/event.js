function alphabetic(s) {
  return (
    s ===
    s
      .split('')
      .sort((a, b) => a.localeCompare(b))
      .join('')
  );
}

console.log(alphabetic('asd')); // false
console.log(alphabetic('codewars')); // false
console.log(alphabetic('door')); // true
console.log(alphabetic('cell')); // true
console.log(alphabetic('z')); // true
console.log(alphabetic('')); // true
