function fiveLine(s) {
  let string = s.trim();

  return Array.from({ length: 5 })
    .map((_, index) => string.repeat(index + 1))
    .join('\n');
}

console.log(fiveLine('  a')); // 'a\naa\naaa\naaaa\naaaaa');
console.log(fiveLine('\txy \n')); // 'xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy'
console.log(fiveLine('           Ok               ')); // 'Ok\nOkOk\nOkOkOk\nOkOkOkOk\nOkOkOkOkOk'
