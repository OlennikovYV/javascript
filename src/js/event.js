function Dog(breed) {
  this.breed = breed;
}

const snoopy = new Dog('Beagle');

snoopy.bark = function () {
  return 'Woof';
};

const scoobydoo = new Dog('Great Dane');

scoobydoo.bark = () => 'Woof';

console.log(snoopy.bark()); // 'Woof');
console.log(scoobydoo.bark()); // 'Woof');
