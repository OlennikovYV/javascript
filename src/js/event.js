function getIssuer(number) {
  let card = String(number);
  const length = card.length;

  if (['4'].includes(...card.match(/^\d/g)) && (length == 13 || length == 16))
    return 'VISA';

  if (['34', '37'].includes(...card.match(/^\d\d/g)) && length == 15)
    return 'AMEX';

  if (['6011'].includes(...card.match(/^\d\d\d\d/g)) && length == 16)
    return 'Discover';

  if (
    ['51', '52', '53', '54', '55'].includes(...card.match(/^\d\d/g)) &&
    length == 16
  )
    return 'Mastercard';

  return 'Unknown';
}

console.log(getIssuer(4111111111111111)); // 'VISA'
console.log(getIssuer(378282246310005)); // 'AMEX'
console.log(getIssuer(9111111111111111)); // 'Unknown'
console.log(getIssuer(6011111111111117)); // 'Discover';
console.log(getIssuer(5105105105105100)); // 'Mastercard';
