function getMiddle(s) {
	const mid = Math.ceil(s.length / 2);
	return (s.length % 2) ? s.slice(mid - 1, mid) : s.slice(mid - 1, mid + 1);
}

console.log(getMiddle("test")); // "es"
console.log(getMiddle("testing")); // "t"
console.log(getMiddle("middle")); // "dd"
console.log(getMiddle("A")); // "A"