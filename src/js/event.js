function converter(mpg) {
  const lKm = mpg * 0.35400605;

  return Math.round((lKm + 0) * 100) / 100;
}

console.log(converter(10)); // 3.54
console.log(converter(20)); // 7.08
console.log(converter(24)); // 8.5
console.log(converter(30)); // 10.62
console.log(converter(94)); // 33.28
console.log(converter(31526)); // 11160.39
console.log(converter(48960)); // 17332.14
