//return the total number of smiling faces in the array
function countSmileys(arr) {
	const countSmile = arr.length && arr.join('').match(/[:;][~-]?[)D]/g);
	return countSmile ? countSmile.length : 0;
}

console.log(countSmileys([]));// 0
console.log(countSmileys([':D', ':~)', ';~D', ':)']));// 4
console.log(countSmileys([':)', ':(', ':D', ':O', ':;']));// 2
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));//1
console.log(countSmileys([';~>', ';~>', ';-(', ';->', ':>', ';~(', ';o>']));//0