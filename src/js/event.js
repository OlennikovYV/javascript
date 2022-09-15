function howManydays(month) {
  return new Date(0, month, 0).getDate();
}

console.log(howManydays(1)); //31
console.log(howManydays(2)); //28
console.log(howManydays(3)); //31
console.log(howManydays(4)); //30
console.log(howManydays(12)); //31
