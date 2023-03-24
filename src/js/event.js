class Dictionary {
  constructor() {
    this.list = {};
  }

  newEntry(key, value) {
    this.list[key] = value;
  }

  look(key) {
    return this.list[key] || `Can't find entry for ${key}`;
  }
}

const d = new Dictionary();

d.newEntry('Apple', 'A fruit');
console.log(d.look('Apple')); // 'A fruit'

d.newEntry('Soccer', 'A sport');
console.log(d.look('Soccer')); // 'A sport'
console.log(d.look('Hi')); // "Can't find entry for Hi"
console.log(d.look('Ball')); // "Can't find entry for Ball"

d.newEntry('soccer', 'a sport');
console.log(d.look('soccer')); // 'a sport'
