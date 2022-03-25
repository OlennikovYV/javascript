function updateLight(current) {
	return {
		"green": "yellow",
		"yellow": "red",
		"red": "green"
	}[current];
}

console.log(updateLight("green")); //  "yellow"
console.log(updateLight("yellow")); //  "red"
console.log(updateLight("red")); //  "green"