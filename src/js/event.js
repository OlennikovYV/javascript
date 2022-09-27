function parse(data) {
  let result = {
    number: 0,
    array: [],
  };

  for (let i = 0; i < data.length; i += 1) {
    switch (data[i]) {
      case 'i':
        result.number += 1;
        break;
      case 'd':
        result.number -= 1;
        break;
      case 's':
        result.number *= result.number;
        break;
      case 'o':
        result.array.push(result.number);
    }
  }

  return result.array;
}

console.log(parse('iiisdoso')); // [8, 64]
console.log(parse('iiisxxxdoso')); // [8, 64]
