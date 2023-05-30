function isTriangular(t) {
  return Math.sqrt(8 * t + 1) % 1 == 0;
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
