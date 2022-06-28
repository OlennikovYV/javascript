function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  return (
    new Date(expirationDate) >= new Date(currentDate) &&
    enteredCode === correctCode
  );
}

console.log(checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014')); //  true
console.log(checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014')); //  false
console.log(
  checkCoupon('123', '123', 'September 5, 2014', 'September 4, 2014')
); // false
