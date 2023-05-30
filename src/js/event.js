function isTriangular(t) {
  for (let i = 0; i <= 65536; i += 1) {
    if (t == (i * (i + 1)) / 2) return true;
  }

  return false;
}

// returns true when t is a triangular number
console.log(isTriangular(1)); // true
console.log(isTriangular(3)); // true
console.log(isTriangular(6)); // true
console.log(isTriangular(10)); // true
console.log(isTriangular(15)); // true
console.log(isTriangular(21)); // true
console.log(isTriangular(28)); // true

// returns false when t is not a triangular number
console.log(isTriangular(2)); // false
console.log(isTriangular(7)); // false
console.log(isTriangular(14)); // false
console.log(isTriangular(27)); // false
