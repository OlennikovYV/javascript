function newAvg(arr, newavg) {
  let sum, avg;

  sum = arr.reduce((sum, num) => sum + num, 0);
  avg = newavg * (arr.length + 1) - sum;

  if (avg <= 0) throw new TypeError('Expected New Average is too low');

  return Math.ceil(avg);
}

console.log(newAvg([1400.25, 30000.76, 5.56, 7, 9, 11, 15.48, 120.98], 4800));
console.log(newAvg([1400.25, 30000.76, 5.56, 7, 9, 11, 15.48, 120.98], 10000));

console.log(newAvg([14, 30, 5, 7, 9, 11, 16], 90)); // 628
console.log(newAvg([14, 30, 5, 7, 9, 11, 15], 92)); // 645
