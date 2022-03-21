const m1 = [[1, 2],
[3, 4]];

var decompose = function (arrays) {
	let matrix = {
		l: [],
		u: [],
	},
		n = arrays.length;

	matrix.u = JSON.parse(JSON.stringify(arrays));
	matrix.l = JSON.parse(JSON.stringify(arrays));

	for (let i = 0; i < n; i++) {
		for (let j = i; j < n; j++) {
			matrix.l[j][i] = matrix.u[j][i] / matrix.u[i][i];
		}
	}

	for (let k = 1; k < n; k++) {
		for (let i = k - 1; i < n; i++)
			for (let j = i; j < n; j++)
				matrix.l[j][i] = matrix.u[j][i] / matrix.u[i][i];

		for (let i = k; i < n; i++)
			for (let j = k - 1; j < n; j++)
				matrix.u[i][j] = matrix.u[i][j] - matrix.l[i][k - 1] * matrix.u[k - 1][j];
	}

	for (let i = 0; i < n; i++)
		for (let j = 0; j < n; j++) {
			if (j > i) matrix.l[i][j] = 0;
		}

	return matrix;
};

console.table(decompose(m1).l); //  [[1, 0] [3, 1]]
console.table(decompose(m1).u); //  [[1, 2] [0, -2]]