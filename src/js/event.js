class Vector {
  constructor(vector) {
    this.vector = vector;
  }

  isEqualLength(vectorTwo) {
    return this.vector.length === vectorTwo.vector.length;
  }

  add(vectorTwo) {
    if (!this.isEqualLength(vectorTwo)) throw Error('Error');

    return new Vector(this.vector.map((el, i) => el + vectorTwo.vector[i]));
  }

  subtract(vectorTwo) {
    if (!this.isEqualLength(vectorTwo)) throw Error('Error');

    return new Vector(this.vector.map((el, i) => el - vectorTwo.vector[i]));
  }

  dot(vectorTwo) {
    if (!this.isEqualLength(vectorTwo)) throw Error('Error');

    return this.vector.reduce(
      (sumMul, el, i) => sumMul + el * vectorTwo.vector[i],
      0
    );
  }

  norm() {
    return Math.sqrt(
      this.vector.reduce((sumNorm, el) => sumNorm + Math.pow(el, 2), 0)
    );
  }

  toString() {
    return `(${this.vector.toString()})`;
  }

  equals(vectorTwo) {
    return (
      this.isEqualLength(vectorTwo) &&
      this.vector.every((el, i) => el === vectorTwo.vector[i])
    );
  }
}

const a = new Vector([1, 2]);
const b = new Vector([3, 4]);
const c = new Vector([5, 6, 7, 8]);

console.log(a.add(b)); // Vector([4, 6])
console.log(b.subtract(a)); // Vector([2, 2])
console.log(a.dot(b)); // 11
console.log(b.norm()); // 5
console.log(a.toString()); // (1,2)
console.log(a.add(b).equals(new Vector([4, 6]))); // True
try {
  a.add(c); // Throw error 'Error'
} catch (e) {
  console.log(e.message);
}
