function score(dice) {
	const points3x = [
		1000,
		200,
		300,
		400,
		500,
		600,
	];
	const countDice = {};
	let result;

	dice.reduce((acc, el) => {
		acc[el] = (acc[el] || 0) + 1;
		return acc;
	}, countDice);

	result = [1, 2, 3, 4, 5, 6].reduce((acc, el) => {
		if (countDice[el] >= 3) {
			acc += points3x[el - 1]
			countDice[el] -= 3;
		}

		if (el === 1) acc += (countDice[el] || 0) * 100;
		if (el === 5) acc += (countDice[el] || 0) * 50;

		return acc;
	}, 0);

	return result;
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