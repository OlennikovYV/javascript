class God {
  static create() {
    this.humans = [new Man(), new Woman()];
    return this.humans;
  }
}

class Human {}
class Man extends Human {}
class Woman extends Human {}

let humans = God.create();

console.log(humans[0] instanceof Man); // True
console.log(humans[1] instanceof Woman); // True
