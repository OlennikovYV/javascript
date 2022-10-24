function createPhoneNumber(numbers) {
  const phone = numbers.join('');
  const phone1 = phone.slice(0, 3);
  const phone2 = phone.slice(3, 6);
  const phone3 = phone.slice(6);

  return `(${phone1}) ${phone2}-${phone3}`;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
// '(123) 456-7890'
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
// '(111) 111-1111'
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
// '(123) 456-7890'
