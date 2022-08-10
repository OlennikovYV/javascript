function stat(strg) {
  let stats = getTimeResult(strg);
  let range, average, median;

  function addZero(time) {
    return String(time).padStart(2, '0');
  }
  function getTimeResult(result) {
    return result
      .split(', ')
      .map(result => {
        return result.split('|').map(time => +time);
      })
      .map(time => time[0] * 3600 + time[1] * 60 + time[2])
      .sort((a, b) => a - b);
  }

  function getResultString(time) {
    let hours = Math.trunc(time / 3600);
    let minutes = Math.trunc(time / 60) - hours * 60;
    let seconds = time % 60;

    return `${addZero(hours)}|${addZero(minutes)}|${addZero(seconds)}`;
  }

  if (!strg) return '';

  range = stats[stats.length - 1] - stats[0];
  average = Math.trunc(
    stats.reduce((sum, time) => sum + time, 0) / stats.length
  );
  if (stats.length % 2 !== 0) {
    median = stats[Math.floor(stats.length / 2)];
  } else {
    let indexMedian = Math.floor(stats.length / 2);
    median = Math.trunc((stats[indexMedian - 1] + stats[indexMedian]) / 2);
  }

  return (
    'Range: ' +
    getResultString(range) +
    ' Average: ' +
    getResultString(average) +
    ' Median: ' +
    getResultString(median)
  );
}

console.log(stat('01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17'));
// "Range: 01|01|18 Average: 01|38|05 Median: 01|32|34")
console.log(
  stat('02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41')
);
// "Range: 00|31|17 Average: 02|26|18 Median: 02|22|00")
console.log(stat('02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|32|34, 2|17|17'));
// "Range: 00|31|17 Average: 02|27|10 Median: 02|24|57"
