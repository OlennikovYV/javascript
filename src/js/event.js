function solution(number) {
	let sum = 0;

	if (number < 3) return 0;

	for (let i = 3; i < number; i++) {
		if (i % 3 === 0) {
			sum += i;
			continue;
		}
		if (i % 5 === 0) {
			sum += i;
			continue;
		}
	}

	return sum;
}

console.log(solution(10)); // 23
console.log(solution(50)); // 543
console.log(solution(100)); // 2318