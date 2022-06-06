function wave(str) {
  let result = [];
  const string = str;
  return string.split('').reduce((acc, el, i) => {
    if (el !== ' ') {
      const str =
        string.slice(0, i).toLowerCase() +
        string[i].toUpperCase() +
        string.slice(i + 1).toLowerCase();
      acc.push(str);
    }
    return acc;
  }, result);
}

console.log(wave('Codewars'));
console.log(wave('Hello'));
console.log(wave('Two words'));
