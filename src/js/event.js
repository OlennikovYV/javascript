function Hero(name) {
  this.name = name || 'Hero';
  this.position = '00';
  this.health = 100;
  this.damage = 5;
  this.experience = 0;
}

const hero = new Hero('Hero');

console.log(JSON.stringify(hero));
// {"name":"Hero","position":"00","health":100,"damage":5,"experience":0}
