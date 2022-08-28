class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    return `${this.name} meows.`;
  }
}

let cat = new Cat('Mr Whiskers');
console.log(cat.speak()); // 'Mr Whiskers meows.'
cat = new Cat('Lamp');
console.log(cat.speak()); // 'Lamp meows.'
cat = new Cat('$$Money Bags$$');
console.log(cat.speak()); // '$$Money Bags$$ meows.'
