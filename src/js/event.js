function addProperty(obj, prop, value) {
  if (obj.hasOwnProperty(prop)) {
    throw Error('Error');
  } else {
    obj[prop] = value;
  }
}

const obj = {};

addProperty(obj, 'name', 'Palle');
console.log(obj.name === 'Palle'); // True

obj.name = 'Dylan';
console.log(obj.name === 'Dylan'); // True

try {
  addProperty(obj, 'name', 'Palle');
} catch (error) {
  console.log(error.message);
}
