function solve(s) {
  let upCase = 0;
  let loCase = 0;
  let num = 0;
  let spec = 0;

  s.split('').map(char => {
    if (/[a-z]+/i.test(char)) {
      if (char.toUpperCase() === char) upCase += 1;
      if (char.toLowerCase() === char) loCase += 1;
    }
    if (/[0-9]/.test(char)) num += 1;
    if (/[^0-9|^a-z]/i.test(char)) spec += 1;
  });

  return [upCase, loCase, num, spec];
}

console.log(solve('Codewars@codewars123.com')); // [1, 18, 3, 2]
console.log(solve('bgA5<1d-tOwUZTS8yQ')); // [7, 6, 3, 2]
console.log(solve('P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H')); // [9, 9, 6, 9]
console.log(solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD"));
// [15, 8, 6, 9]
console.log(solve('$Cnl)Sr<7bBW-&qLHI!mY41ODe')); // [10, 7, 3, 6]
console.log(solve('@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft'));
// [7, 13, 4, 10]
