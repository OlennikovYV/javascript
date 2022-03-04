function saveRhino(arr) {
	const findMinPath = arr.map(el => Math.min(...el));
	const indexPath = findMinPath.indexOf(Math.max(...findMinPath));

	return ['North', 'East', 'South', 'West'][indexPath];
}

// N E S W
console.log(saveRhino([[4, 5, 7, 5, 6], [1], [2, 5, 4, 8], [5, 6]]));// 'West'
console.log(saveRhino([[1], [1], [1], [1]]));// 'North'
console.log(saveRhino([[1], [5], [3], [2]]));// 'East'
console.log(saveRhino([[1, 4], [1, 5], [2, 2, 9], [2, 3, 10]]));// 'South'
console.log(saveRhino([[2, 5, 6], [3, 8, 9], [4, 5], [1, 10]]));// 'South'
console.log(saveRhino([[6, 6, 6, 6, 9], [4, 5, 6, 7], [9, 2, 4, 5], [7, 3]]));// 'North'