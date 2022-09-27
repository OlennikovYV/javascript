function parse(data) {
  let result = [];

  [...data].reduce((num, char) => {
    if (char === 'i') num += 1;
    if (char === 'd') num -= 1;
    if (char === 's') num *= num;
    if (char === 'o') result.push(num);
    return num;
  }, 0);

  return result;
}

console.log(parse('iiisdoso')); // [8, 64]
console.log(parse('iiisxxxdoso')); // [8, 64]
