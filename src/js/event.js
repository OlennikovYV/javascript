function change(string) {
  let result = Array(26).fill(0);

  return result
    .map((_, index) => {
      return (
        string.includes(String.fromCodePoint(65 + index)) ||
        string.includes(String.fromCodePoint(97 + index))
      );
    })
    .map(checkChar => (checkChar ? '1' : '0'))
    .join('');
}

console.log(change('a **&  bZ')); // '11000000000000000000000001'
