function totalBill(str) {
  return 2 * str.replace(/ /g, '').replace(/r{5}/g, 'rrrr').length;
}

console.log(totalBill('rr')); // 4
console.log(totalBill('rr rrr')); // 8
console.log(totalBill('rr rrr rrr rr')); // 16
console.log(totalBill('rrrrrrrrrrrrrrrrrr   rr r')); //34
console.log(totalBill('')); // 0
