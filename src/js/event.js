class Quark {
  constructor(color, flavor) {
    Object.assign(this, { color, flavor, baryon_number: 1 / 3 });
  }

  interact(quark) {
    [this.color, quark.color] = [quark.color, this.color];
  }
}

let q1 = new Quark('red', 'up');
let q2 = new Quark('blue', 'strange');

console.log(q1.color); // 'red'
console.log(q2.flavor); // 'strange'
console.log(q2.baryon_number); // 1 / 3

q1.interact(q2);
console.log(q1.color); // 'blue'
console.log(q2.color); // 'red'
