function Hero(name) {
  let nameHero = name || 'Hero';

  return {
    name: nameHero,
    position: '00',
    health: 100,
    damage: 5,
    experience: 0,
  };
}

const hero = new Hero('Hero');

console.log(JSON.stringify(hero));
// {"name":"Hero","position":"00","health":100,"damage":5,"experience":0}
