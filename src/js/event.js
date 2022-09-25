class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }

  guess(n) {
    if (!this.lives) throw new Error('Omae wa mo shindeiru');
    if (n !== this.number) this.lives -= 1;
    return n === this.number;
  }
}

let guesser = new Guesser(10, 2);
guesser.guess(10);
guesser.guess(10);
guesser.guess(10);
guesser.guess(10);
console.log(guesser.guess(10)); // true

guesser = new Guesser(10, 2);
guesser.guess(1);
console.log(guesser.guess(1)); // false

guesser = new Guesser(10, 2);
guesser.guess(1);
guesser.guess(2);

try {
  guesser.guess(10);
} catch {
  console.log('error'); // error
}
