function change(string) {
  let result = Array(26).fill(0);

  return result
    .map((_, index) =>
      string.includes(String.fromCodePoint(65 + index)) ||
      string.includes(String.fromCodePoint(97 + index))
        ? '1'
        : '0'
    )
    .join('');
}

console.log(change('a **&  bZ')); // '11000000000000000000000001'
