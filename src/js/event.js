function productFib(prod) {
	let f0 = 0, f1 = 1;

	while (f0 * f1 < prod) {
		[f0, f1] = [f1, f0 + f1];
	}

	return [f0, f1, (f0 * f1 === prod ? true : false)];
}

console.log(productFib(15)); //  [2, 3, ]
console.log(productFib(4895)); //  [55, 89, true]
console.log(productFib(5895)); //  [89, 144, false]
console.log(productFib(74049690)); //  [6765, 10946, true]
console.log(productFib(84049690)); //  [10946, 17711, false]
console.log(productFib(193864606)); //  [10946, 17711, true]
console.log(productFib(447577)); //  [610, 987, false]
console.log(productFib(602070)); //  [610, 987, true]