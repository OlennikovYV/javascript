function getIssuer(number) {
  const card = number.toString();

  if (/^3[4|7]\d{13}$/.test(card)) return 'AMEX';
  if (/^6011\d{12}$/.test(card)) return 'Discover';
  if (/^5[1-5]\d{14}$/.test(card)) return 'Mastercard';
  if (/^4(\d{12}|\d{15})$/.test(card)) return 'VISA';

  return 'Unknown';
}

console.log(getIssuer(4111111111111111)); // 'VISA'
console.log(getIssuer(378282246310005)); // 'AMEX'
console.log(getIssuer(9111111111111111)); // 'Unknown'
console.log(getIssuer(6011111111111117)); // 'Discover';
console.log(getIssuer(5105105105105100)); // 'Mastercard';
