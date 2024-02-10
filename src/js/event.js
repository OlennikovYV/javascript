function convert(time) {
  const addZero = (number, countZero) =>
    String(number).padStart(countZero, '0');

  const hours = addZero(time.getHours(), 2);
  const minutes = addZero(time.getMinutes(), 2);
  const seconds = addZero(time.getSeconds(), 2);
  const milliseconds = addZero(time.getMilliseconds(), 3);

  return `${hours}:${minutes}:${seconds},${milliseconds}`;
}

console.log(convert(new Date(2016, 2, 8, 16, 42, 59))); // '16:42:59,000'
console.log(convert(new Date(1951, 10, 31, 2, 2, 24, 399))); // '02:02:24,399'
console.log(convert(new Date(1523, 5, 29, 23, 2, 2, 9))); // '23:02:02,009'
console.log(convert(new Date(1, 1, 1, 1, 1, 1, 110))); // '01:01:01,110'
console.log(convert(new Date(9999, 9, 9, 9, 9, 9, 999))); // '09:09:09,999'
console.log(convert(new Date(2, 12, 30, 23, 59, 59, 875))); // '23:59:59,875'
console.log(convert(new Date(1850, 12, 30, 13, 39, 19))); // '13:39:19,000'
console.log(convert(new Date(1978, 3, 18, 12, 0, 0, 0))); // '12:00:00,000'
console.log(convert(new Date(1850, 12, 30, 11, 11, 11, 123))); // '11:11:11,123'
console.log(convert(new Date(1850, 12, 30, 0, 0, 0, 321))); // '00:00:00,321'
