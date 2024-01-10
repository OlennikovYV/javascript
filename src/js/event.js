function age(x, y) {
  const ageBrother = Math.abs(x / (y - 1));

  return x > 0 ? ageBrother + x : Math.round(ageBrother * y);
}

console.log(age(-15, 0.25)); // 5
console.log(age(6, 3)); // 9
