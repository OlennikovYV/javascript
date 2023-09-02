const insertSpliter = str => {
  const lengthPart = Math.floor(str.length / 2);
  const arrayString = Array(...str);
  const leftPart = arrayString.slice(0, lengthPart).join('');
  const rightPart = arrayString.slice(-lengthPart).join('');

  return leftPart + '|' + rightPart;
};

function isolateIt(arr) {
  return arr.map(string => insertSpliter(string));
}

console.log(isolateIt(['abcd', 'efgh'])); // ['ab|cd', 'ef|gh']
console.log(isolateIt(['abcde', 'fghij'])); // ['ab|de', 'fg|ij']
console.log(isolateIt(['1234', '56789'])); // ['12|34', '56|89']
