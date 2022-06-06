function wave(str) {
  let result = [];

  str.split('').forEach((el, i) => {
    if (el !== ' ') {
      result.push(
        str.slice(0, i).toLowerCase() +
          str[i].toUpperCase() +
          str.slice(i + 1).toLowerCase()
      );
    }
  });

  return result;
}

console.log(wave('Codewars'));
console.log(wave('Hello'));
console.log(wave('Two words'));
