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
	let arrLength1,
		arrLength2;

	if (!a1.length || !a2.length) return -1;

	arrLength1 = a1.map(el => el.length);
	arrLength2 = a2.map(el => el.length);

	return Math.max(
		Math.max(...arrLength1) - Math.min(...arrLength2),
		Math.max(...arrLength2) - Math.min(...arrLength1)
	);
}

console.log(mxdiflg(s1, s2));