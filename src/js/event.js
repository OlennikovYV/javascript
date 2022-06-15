function usdcny(usd) {
  const rate = 6.75;
  return (usd * rate).toFixed(2) + ' Chinese Yuan';
}

console.log(usdcny(15)); // '101.25 Chinese Yuan'
console.log(usdcny(20)); // '135.00 Chinese Yuan'
console.log(usdcny(30)); // '202.50 Chinese Yuan'
console.log(usdcny(465)); // '3138.75 Chinese Yuan'
