function twoDecimalPlaces(n) {
  return Math.round(n * 100) / 100;
}

console.log(twoDecimalPlaces(4.659725356)); // 4.66,
console.log(twoDecimalPlaces(173735326.3783732637948948)); // 173735326.38,
console.log(twoDecimalPlaces(4.653725356)); // 4.65,
