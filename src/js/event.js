function datingRange(age) {
  let min, max;

  if (age > 14) {
    min = age / 2 + 7;
    max = (age - 7) * 2;
  } else {
    min = age - 0.1 * age;
    max = age + 0.1 * age;
  }

  return `${Math.floor(min)}-${Math.floor(max)}`;
}

console.log(datingRange(17)); // "15-20"
console.log(datingRange(40)); // "27-66"
console.log(datingRange(15)); // "14-16"
console.log(datingRange(35)); // "24-56"
console.log(datingRange(10)); // "9-11"
