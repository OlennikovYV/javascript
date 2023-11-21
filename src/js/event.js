class Counter {
  constructor() {
    this.value = 0;
  }
  increase() {
    this.value++;
  }
  getValue() {
    return this.value;
  }
  reset() {
    return (this.value = 0);
  }
}

const counter = new Counter();

console.log(counter.getValue()); // 0

counter.increase();
console.log(counter.getValue()); // 1

counter.reset();
console.log(counter.getValue()); // 0
