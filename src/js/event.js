function isTriangle(a, b, c) {
	return (a + b > c && b + c > a && a + c > b);
}

console.log(isTriangle(1, 2, 2));// true
console.log(isTriangle(7, 2, 2));// false
console.log(isTriangle(3, 7, 10));// false
console.log(isTriangle(9, -2, -1));// false
console.log(isTriangle(9, 7, 5));// true
console.log(isTriangle(3, 6, 5));// true