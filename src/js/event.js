function Counter() {
  let counter = 0;

  this.check = () => counter;

  this.increment = () => counter++;
}

var myCounter = new Counter();

myCounter.increment();
myCounter.increment();
console.log(myCounter.check()); // 2
