function convert(number) {
  return String.fromCharCode(...number.match(/../g));
}

console.log(convert('65')); // 'A'
console.log(convert('656667')); // 'ABC'
console.log(convert('676584')); // 'CAT'
console.log(convert('73327673756932858080698267658369')); // 'I LIKE UPPERCASE'
