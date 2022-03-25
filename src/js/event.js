function updateLight(current) {
	const trafficLight = ["green", "yellow", "red"];

	let index = trafficLight.indexOf(current);
	index++;
	if (index > 2) index = 0;

	return trafficLight[index];
}

console.log(updateLight("green")); //  "yellow"
console.log(updateLight("yellow")); //  "red"
console.log(updateLight("red")); //  "green"