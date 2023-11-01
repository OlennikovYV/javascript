function zipvalidate(postcode) {
  return /^(1|2|3|4|6)[0-9]{5}$/.test(postcode);
}

console.log(zipvalidate('198328')); // True
console.log(zipvalidate('310003')); // True
console.log(zipvalidate('424000')); // True

console.log(zipvalidate('12A483')); // False
console.log(zipvalidate('1@63')); // False
console.log(zipvalidate('111')); // False
console.log(zipvalidate('056879')); // False
console.log(zipvalidate('1111111')); // False
