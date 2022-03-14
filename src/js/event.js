let s1 = ["hoqq",
	"bbllkw",
	"oox",
	"ejjuyyy",
	"plmiis",
	"xxxzgpsssa",
	"xxwwkktt",
	"znnnnfqknaz",
	"qqquuhii",
	"dvvvwz"],
	s2 = ["cccooommaaqqoxii",
		"gggqaffhhh",
		"tttoowwwmmww"];

function mxdiflg(a1, a2) {
	let maxLength1,
		minLength1,
		maxLength2,
		minLength2,
		diff1,
		diff2,
		arrLength1,
		arrLength2;

	if (!a1.length || !a2.length) return -1;

	arrLength1 = a1.map(el => el.length);
	arrLength2 = a2.map(el => el.length);

	maxLength1 = Math.max(...arrLength1);
	maxLength2 = Math.max(...arrLength2);
	minLength1 = Math.min(...arrLength1);
	minLength2 = Math.min(...arrLength2);

	diff1 = Math.abs(maxLength1 - minLength2);
	diff2 = Math.abs(minLength1 - maxLength2);

	return (diff1 > diff2) ? diff1 : diff2;
}

console.log(mxdiflg(s1, s2));