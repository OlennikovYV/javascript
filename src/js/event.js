function swap(str) {
  return Array.from(str, char =>
    char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()
  ).join('');
}

console.log(swap('HelloWorld')); // 'hELLOwORLD'
console.log(swap('CodeWars')); // 'cODEwARS'
console.log(swap('a B1')); // 'A b1'
