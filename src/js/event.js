function isToday(date) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const checkDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );

  return today.getTime() - checkDate.getTime() === 0;
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
