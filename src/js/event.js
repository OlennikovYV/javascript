function timeConvert(num) {
  let hours, min;

  if (num <= 0) return `00:00`;

  hours = String(Math.trunc(num / 60));
  min = String(num - hours * 60);

  return `${hours.padStart(2, '0')}:${min.padStart(2, '0')}`;
}

console.log(timeConvert(0)); // '00:00'
console.log(timeConvert(-6)); // '00:00'
console.log(timeConvert(8)); // '0' + 0 + ':' + '0' + 8
console.log(timeConvert(32)); // '0' + 0 + ':' + 32
console.log(timeConvert(75)); // '0' + 1 + ':' + 15
console.log(timeConvert(63)); // '0' + 1 + ':' + '0' + 3
console.log(timeConvert(134)); // '0' + 2 + ':' + 14
console.log(timeConvert(180)); // '0' + 3 + ':' + '0' + 0
console.log(timeConvert(970)); // 16 + ':' + 10
console.log(timeConvert(565757)); // 9429 + ':' + 17
