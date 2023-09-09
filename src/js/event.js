function determineTime(durations) {
  const secondsInDay = 60 * 60 * 24;
  const secondsInHour = 60 * 60;
  const secondsInMinute = 60;

  const durationsDelivePresents = durations.reduce(
    (durationInSeconds, time) => {
      const [hours, minutes, seconds] = time.split(':');

      return (
        durationInSeconds +
        Number(hours) * secondsInHour +
        Number(minutes) * secondsInMinute +
        Number(seconds)
      );
    },
    0
  );

  return durationsDelivePresents <= secondsInDay;
}

console.log(determineTime(['00:30:00', '02:30:00', '00:15:00'])); // true
console.log(determineTime([])); // true
console.log(determineTime(['04:30:00', '02:00:00', '01:30:00', '16:00:00'])); // true
console.log(determineTime(['12:00:00', '12:00:00'])); // true
console.log(determineTime(['12:00:00', '12:00:01'])); // false
console.log(determineTime(['06:00:00', '12:00:00', '06:30:00'])); // false
