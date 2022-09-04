function Dog(breed) {
  this.breed = breed;
  this.bark = function () {
    return 'Woof';
  };
}

const snoopy = new Dog('Beagle');
const scoobydoo = new Dog('Great Dane');

console.log(snoopy.bark()); // 'Woof');
console.log(scoobydoo.bark()); // 'Woof');
