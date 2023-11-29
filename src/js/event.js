function sakuraFall(v) {
  const highBranch = 400;

  return v <= 0 ? 0 : highBranch / v;
}

console.log(sakuraFall(5)); // 80
console.log(sakuraFall(10)); // 40
console.log(sakuraFall(-1)); // 0
