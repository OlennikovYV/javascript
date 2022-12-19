function findStrangeValue() {
  return +'fart';
}

let x = findStrangeValue();
console.log(x === x); // false
