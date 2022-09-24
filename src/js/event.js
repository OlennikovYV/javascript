function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.name = this.firstName + ' ' + this.lastName;
}

const n = new NameMe('John', 'Doe');

console.log(typeof n.firstName != undefined && n.firstName == 'John'); // true
console.log(typeof n.lastName != undefined && n.lastName == 'Doe'); // true
console.log(typeof n.name != undefined && n.name == 'John Doe'); // true
