function enough(cap, on, wait) {
  const waitBus = cap - on - wait;
  return waitBus < 0 ? Math.abs(waitBus) : 0;
}

console.log(enough(10, 5, 5)); // 0
console.log(enough(100, 60, 50)); // 10
console.log(enough(20, 5, 5)); // 0
