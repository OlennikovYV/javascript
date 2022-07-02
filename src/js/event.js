const quote = function (fighter) {
  return fighter.toLowerCase() === 'george saint pierre'
    ? 'I am not impressed by your performance.'
    : "I'd like to take this chance to apologize.. To absolutely NOBODY!";
};

console.log(quote('george saint pierre')); //  'I am not impressed by your performance.'
console.log(quote('conor mcgregor')); //  "I'd like to take this chance to apologize.. To absolutely NOBODY!"

console.log(quote('George Saint Pierre')); //  'I am not impressed by your performance.'
console.log(quote('Conor McGregor')); //  "I'd like to take this chance to apologize.. To absolutely NOBODY!"
