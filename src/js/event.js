function swap(str) {
  const swapCase = char =>
    char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase();

  return str.replace(/[a-zA-Z]/g, swapCase);
}

console.log(swap('HelloWorld')); // 'hELLOwORLD'
console.log(swap('CodeWars')); // 'cODEwARS'
console.log(swap('a B1')); // 'A b1'
