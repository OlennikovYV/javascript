function mygcd(x, y) {
  if (y > 0) {
    let k = x % y;
    return mygcd(y, k);
  } else {
    return Math.abs(x);
  }
}

console.log(mygcd(30, 12)); // 6
console.log(mygcd(36, 12)); // 12
console.log(mygcd(8, 9)); // 1
console.log(mygcd(1, 1)); // 1
