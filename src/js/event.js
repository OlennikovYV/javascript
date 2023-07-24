function isToday(date) {
  return new Date().setHours(0, 0, 0, 0) === date.setHours(0, 0, 0, 0);
}

const today = new Date();
let actualToday = isToday(today);
console.log(actualToday); // true

const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
console.log(isToday(tomorrow)); // false

const yesterday = new Date();
yesterday.setDate(today.getDate() - 1);
console.log(isToday(yesterday)); // false
