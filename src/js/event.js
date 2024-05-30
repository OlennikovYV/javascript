function NamedOne(first, last) {
  this.firstName = first;
  this.lastName = last;

  Object.defineProperty(this, 'fullName', {
    get() {
      return `${this.firstName} ${this.lastName}`;
    },

    set(value) {
      if (/[a-z] [a-z]/gi.test(value))
        [this.firstName, this.lastName] = value.split(' ');
    },
  });
}

let n;

n = new NamedOne('John', 'Doe');

// '1. create a NamedOne'
console.log(n.firstName); // 'John'
console.log(n.lastName); // 'Doe'
console.log(n.fullName); // 'John Doe'

// '2. change firstName'
n.firstName = 'Jane';
console.log(n.firstName); // 'Jane'
console.log(n.fullName); // 'Jane Doe'

// '3. change lastName'
n.firstName = 'Jane';
n.lastName = 'Smith'; // -> n.name = "Jane Smith"
console.log(n.lastName); // 'Smith'
console.log(n.fullName); // 'Jane Smith'

// '4. change fullName'
n.fullName = 'Juan Herrero';
console.log(n.fullName); // 'Juan Herrero'
console.log(n.lastName); // 'Herrero'
console.log(n.firstName); // 'Juan'
