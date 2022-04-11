function score(dice) {
	const countDice = [0, 0, 0, 0, 0, 0];
	const points3x = [1000, 200, 300, 400, 500, 600];
	const points1x = [100, 0, 0, 0, 50, 0];

	dice.map(el => countDice[el - 1]++);

	return countDice.reduce((acc, el, index) => {
		return acc +
			(el >= 3 ? points3x[index] : 0) +
			(points1x[index] * (el % 3));
	}, 0);
}

/* 
Three 1's => 1000 points
Three 6's =>  600 points
Three 5's =>  500 points
Three 4's =>  400 points
Three 3's =>  300 points
Three 2's =>  200 points
One   1   =>  100 points
One   5   =>   50 point 
*/

console.log(score([2, 3, 4, 6, 2])); //  0
console.log(score([4, 4, 4, 3, 3])); //  400
console.log(score([2, 4, 4, 5, 4])); //  450