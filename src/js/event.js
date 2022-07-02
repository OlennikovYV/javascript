const quote = function (fighter) {
  const george = 'I am not impressed by your performance.';
  const conor =
    "I'd like to take this chance to apologize.. To absolutely NOBODY!";

  return fighter.toLowerCase() === 'george saint pierre' ? george : conor;
};

console.log(quote('george saint pierre')); //  'I am not impressed by your performance.'
console.log(quote('conor mcgregor')); //  "I'd like to take this chance to apologize.. To absolutely NOBODY!"

console.log(quote('George Saint Pierre')); //  'I am not impressed by your performance.'
console.log(quote('Conor McGregor')); //  "I'd like to take this chance to apologize.. To absolutely NOBODY!"
