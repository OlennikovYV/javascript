const avg = a => a.reduce((sum, number) => sum + number, 0) / a.length;

console.log(avg([0, 1, 2, 3, 4])); // 2
