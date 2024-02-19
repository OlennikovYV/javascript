function convert(number) {
  let codesASCII = [];

  for (let i = 0; i < number.length; i += 2) {
    codesASCII.push(number.slice(i, i + 2));
  }

  return String.fromCharCode(...codesASCII);
}

console.log(convert('65')); // 'A'
console.log(convert('656667')); // 'ABC'
console.log(convert('676584')); // 'CAT'
console.log(convert('73327673756932858080698267658369')); // 'I LIKE UPPERCASE'
