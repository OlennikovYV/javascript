function timeForMilkAndCookies(date) {
  return date.getDate() === 24 && date.getMonth() === 11;
}

let year = 2013;
let month = 11;
let day = 24;
console.log(timeForMilkAndCookies(new Date(year, month, day))); // true

year = 2013;
month = 10;
day = 24;
console.log(timeForMilkAndCookies(new Date(year, month, day))); // false
