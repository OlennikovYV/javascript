// Add rooms here
let rooms = {};

for (let i = 0; i < 3; i += 1) {
  rooms[`room ${i + 1}`] = {
    'room ${i+1}': i + 1,
    description: `room ${i + 1}`,
    completed: i % 2,
  };
}

const keys = Object.keys(rooms);
console.log(keys.length >= 3); // true

keys.forEach(name => {
  console.log(typeof rooms[name] === 'object'); // `${name} should be an object`
});

keys.forEach(name => {
  let numKeys = Object.keys(rooms[name]).length;
  console.log(numKeys >= 3); // `not enough properties for room: ${name}`
});
