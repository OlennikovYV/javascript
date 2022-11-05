class Person {
  constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }

  sayFullName() {
    return this.firstName + ' ' + this.lastName;
  }

  static greetExtraTerrestrials(raceName) {
    return `Welcome to Planet Earth ${raceName}`;
  }
}

console.log(new Person().firstName); // 'John'
console.log(new Person().lastName); // 'Doe'
console.log(new Person().age); // 0
console.log(new Person().gender); // 'Male'
console.log(new Person().sayFullName()); // 'John Doe'
// Example Custom Test
console.log(new Person('Jane', 'Doe', 25, 'Female').firstName); // 'Jane'
console.log(new Person('Jane', 'Doe', 25, 'Female').lastName); // 'Doe'
console.log(new Person('Jane', 'Doe', 25, 'Female').age); // 25
console.log(new Person('Jane', 'Doe', 25, 'Female').gender); // 'Female'
console.log(new Person('Jane', 'Doe', 25, 'Female').sayFullName()); // 'Jane Doe'
