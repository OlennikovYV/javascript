function Counter() {
  this.counter = 0;

  this.check = function () {
    return this.counter;
  };

  this.increment = function () {
    this.counter = this.counter + 1;
  };
}

var myCounter = new Counter();

myCounter.increment();
myCounter.increment();
console.log(myCounter.check()); // 2
