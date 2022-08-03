// Add rooms here
var rooms = {
  roomA: {
    name: 'Room A',
    description: 'room',
    completed: true,
  },
  roomB: {
    name: 'Room B',
    description: 'room',
    completed: true,
  },
  roomC: {
    name: 'Room C',
    description: 'room',
    completed: true,
  },
};

const keys = Object.keys(rooms);
console.log(keys.length >= 3); // true

keys.forEach(name => {
  console.log(typeof rooms[name] === 'object'); // `${name} should be an object`
});

keys.forEach(name => {
  let numKeys = Object.keys(rooms[name]).length;
  console.log(numKeys >= 3); // `not enough properties for room: ${name}`
});
