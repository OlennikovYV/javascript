function findNextPower(val, pow_) {
  const epsilon = 0.0000000000001;
  let nextNumber = val ** (1 / pow_);

  if (nextNumber === Math.trunc(nextNumber)) {
    nextNumber = nextNumber + 1;
  } else {
    if (Number((nextNumber + epsilon).toFixed(5)) === Math.ceil(nextNumber)) {
      nextNumber = Math.floor(nextNumber + epsilon) + 1;
    } else {
      nextNumber = Math.ceil(nextNumber);
    }
  }

  return nextNumber ** pow_;
}

console.log(findNextPower(8, 3)); // 27
console.log(findNextPower(12385, 3)); // 13824
console.log(findNextPower(1245678, 5)); // 1419857
console.log(findNextPower(1245678, 6)); // 1771561
console.log(findNextPower(4782969, 7)); // 10000000

console.log(findNextPower(64000000, 6)); // 85766121
