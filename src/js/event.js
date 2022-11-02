function SafeInteger(n) {
  return n < Number.MAX_SAFE_INTEGER;
}

console.log(SafeInteger(9007199254740992)); // false
console.log(SafeInteger(9007199254740990)); // true
