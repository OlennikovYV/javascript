function rotate(str) {
  return str.split('').reduce((arrSum, el, i, arr) => {
    const string = arr.slice(i + 1).concat(arr.slice(0, i + 1));
    arrSum.push(string.join(''));
    return arrSum;
  }, []);
}

const testOut = rotate('Hello');
console.log(testOut);

console.log(testOut.includes('elloH')); // true
console.log(testOut.includes('lloHe')); // true
console.log(testOut.includes('loHel')); // true
console.log(testOut.includes('oHell')); // true
console.log(testOut.includes('Hello')); // true
