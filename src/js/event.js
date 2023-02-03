function consonantCount(str) {
  return Array(...str).reduce((sum, char) => {
    if (
      !['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase()) &&
      /[a-z]/i.test(char)
    )
      sum += 1;
    return sum;
  }, 0);
}

console.log(consonantCount('')); // 0
console.log(consonantCount('aaaaa')); // 0
console.log(consonantCount('XaeiouX')); // 2
console.log(consonantCount('Bbbbb')); // 5
console.log(consonantCount('helLo world')); // 7
console.log(consonantCount('h^$&^#$&^elLo world')); // 7
console.log(consonantCount('0123456789')); // 0
console.log(consonantCount('012345_Cb')); // 2
