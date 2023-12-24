function Counter() {
  this.count = 0;

  this.updateCount = () => this.count++;
}

const counter = new Counter();
console.log(counter.count); // 0

counter.updateCount();
console.log(counter.count); // 1

const counter2 = new Counter();
console.log(counter2.count); // 0

console.log(counter.count); // 1
