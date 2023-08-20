const Singleton = function () {
  if (this.constructor.instance) return this.constructor.instance;

  this.constructor.instance = this;
};

var obj1 = new Singleton();
var obj2 = new Singleton();

obj1 === obj2; // => true
obj1.test = 1;
console.log(obj2.test); // => 1
