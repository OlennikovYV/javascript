function newAvg(arr, newavg) {
  let sum, avg;

  if (!newavg || arr.length === 0)
    throw new TypeError('Expected New Average is too low');

  sum = arr.reduce((sum, num) => sum + num, 0);
  avg = newavg * (arr.length + 1) - sum;

  if (avg <= 0) throw new TypeError('Expected New Average is too low');

  return avg;
}

try {
  newAvg([]); // Throw error 'Expected New Average is too low'
} catch (e) {
  if (e.message === 'Expected New Average is too low')
    console.log('Expected New Average is too low');
  else console.log('Incorrect error');
}
console.log(newAvg([14, 30, 5, 7, 9, 11, 16], 90)); // 628
console.log(newAvg([14, 30, 5, 7, 9, 11, 15], 92)); // 645
