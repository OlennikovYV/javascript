function solution(number) {
	let sum = 0;

	for (let i = 3; i < number; i++) {
		if (i % 3 === 0 || i % 5 === 0)
			sum += i;
	}

	return sum;
}

console.log(solution(-1)); // 0
console.log(solution(0)); // 0
console.log(solution(1)); // 0
console.log(solution(2)); // 0
console.log(solution(10)); // 23
console.log(solution(50)); // 543
console.log(solution(100)); // 2318