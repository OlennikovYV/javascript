class Person {
  constructor(name) {
    this.name = name;
  }
}

Person.prototype.greet = function (name) {
  return 'Hello ' + name + ', my name is ' + this.name;
};

const joe = new Person('Joe');

console.log(joe.greet('Kate')); // 'Hello Kate, my name is Joe'
console.log(joe.name); // 'Joe'
