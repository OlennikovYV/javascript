class God {
  static create() {
    return [new Man('Adam'), new Woman('Eve')];
  }
}

class Human {
  constructor(name) {
    this.name = name;
  }
}
class Man extends Human {
  constructor(name) {
    super(name);
  }
}
class Woman extends Human {
  constructor(name) {
    super(name);
  }
}

let humans = God.create();

console.log(humans[0] instanceof Man); // True
console.log(humans[1] instanceof Woman); // True
