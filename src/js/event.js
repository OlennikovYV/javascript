function evensAndOdds(num) {
  return num.toString([2, 16][num % 2]);
}

console.log(evensAndOdds(2)); // '10'
console.log(evensAndOdds(13)); // 'd'
console.log(evensAndOdds(47)); // '2f'
console.log(evensAndOdds(0)); // '0'
console.log(evensAndOdds(12800)); // '11001000000000'
console.log(evensAndOdds(8172381723)); // '1e71ca61b'
