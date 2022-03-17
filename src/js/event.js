function solution(number) {
	let div3 = Math.floor(--number / 3),
		div5 = Math.floor(number / 5),
		div15 = Math.floor(number / 15);

	return (3 * div3 * (div3 + 1) +
		5 * div5 * (div5 + 1) -
		15 * div15 * (div15 + 1)) / 2;
}

console.log(solution(-1)); // 0
console.log(solution(0)); // 0
console.log(solution(1)); // 0
console.log(solution(2)); // 0
console.log(solution(10)); // 23
console.log(solution(50)); // 543
console.log(solution(100)); // 2318