const Person = function () {
  const person = {
    _name: 'Leroy',
    _friends: [],
    fillFriends(f) {
      this._friends = f;
    },
  };

  return person;
};

const people = [
  ['bob', 'john'],
  ['bob', 'john', 'dave'],
  [],
  ['bob', 'john', 'dave', 'matt', 'alex'],
];

for (let i = 0; i < 4; i++) {
  const person = Person();
  person.fillFriends(people[i]);
  console.log(person._friends); // people[i]
}
