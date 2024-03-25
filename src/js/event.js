class Lamp {
  constructor(color) {
    this.color = color;
    this.on = false;
  }

  toggleSwitch() {
    this.on = !this.on;
  }

  state() {
    return this.on ? 'The lamp is on.' : 'The lamp is off.';
  }
}

const myLamp = new Lamp('Blue');

console.log(myLamp.color); // 'Blue'
console.log(myLamp.on); // false
console.log(myLamp.state()); // 'The lamp is off.'
// now switch it on
myLamp.toggleSwitch();
console.log(myLamp.state()); // 'The lamp is on.'
myLamp.color = 'White';
console.log(myLamp.color);
