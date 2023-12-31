const BARK = 'woof woof';
const SLEEP = 'zzzzzzzzz....';

function dog_bark_by_default(bark) {
  bark = bark && undefined;
  return bark === undefined ? BARK : SLEEP;
}

function dog_bark_only_if_told_so(bark) {
  bark = bark || false;
  return bark ? BARK : SLEEP;
}

function dog_dont_bark_by_default(dont_bark) {
  dont_bark = dont_bark && undefined;
  return dont_bark !== undefined ? BARK : SLEEP;
}

function dog_dont_bark_only_if_told_so(dont_bark) {
  dont_bark = dont_bark || false;
  return !dont_bark ? BARK : SLEEP;
}

console.log(dog_bark_only_if_told_so(true)); // 'woof woof'
console.log(dog_bark_only_if_told_so(false)); // 'zzzzzzzzz....'
console.log(dog_bark_only_if_told_so()); // 'zzzzzzzzz....'
console.log('<---------------------------->');
console.log(dog_dont_bark_only_if_told_so(true)); // 'zzzzzzzzz....'
console.log(dog_dont_bark_only_if_told_so(false)); // 'woof woof'
console.log(dog_dont_bark_only_if_told_so()); // 'woof woof'
console.log('<---------------------------->');
console.log(dog_dont_bark_by_default()); // 'zzzzzzzzz....'
console.log(dog_dont_bark_by_default(false)); // 'woof woof'
console.log('<---------------------------->');
console.log(dog_bark_by_default()); // 'woof woof'
console.log(dog_bark_by_default(false)); // 'zzzzzzzzz....'
