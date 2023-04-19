function Dog(name, breed, sex, age) {
  this.name = name;
  this.breed = breed;
  this.sex = sex;
  this.age = age;
}

Dog.prototype.bark = () => 'Woof!';

console.log('Can you make newly created dogs bark?');

const apollo = new Dog('Apollo', 'Dobermann', 'male', '4');
const zeus = new Dog('Zeus', 'Dobermann', 'male', '4');

console.log(apollo.bark()); // 'Woof!'
console.log(zeus.bark()); // 'Woof!'
