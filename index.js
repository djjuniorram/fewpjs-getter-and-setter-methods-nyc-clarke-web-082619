// Add your Circle class here
const pi = Math.PI;

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }

  get circumference() {
    return this.diameter * pi;
  }

  get area() {
    return this.radius * this.radius * pi;
  }

  set diameter(radius) {
    this.radius = radius / 2;
  }

  set circumference(radius) {
    this.radius = radius / pi / 2;
  }
}
