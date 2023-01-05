// ?---------------------------------------------Завдання 1 ----------------------------------
// Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:

// поле, що зберігає радіус кола;
// get-властивість, яке повертає радіус кола;
// set-властивість, що встановлює радіус кола;
// get-властивість, яке повертає діаметр кола;
// метод, що обчислює площу кола;
// метод, що обчислює довжину кола.
// Продемонструй роботу властивостей і методів.

// Some code
const log = console.log;

class Circle {
  _radius = 1;
  numberPi = Math.PI;

  get radius() {
    log('Defaulted radius via getter: ', this._radius);
  }

  set radius(newRadius) {
    this._radius = newRadius;
    log('Changed radius via setter: ', Math.abs(this._radius));
  }

  get diameter() {
    log('Diameter via getter: ' + Math.abs(2 * this._radius));
  }

  circleSquare() {
    log(
      'Square of circle: ' +
        Math.round(this.numberPi * Math.pow(this._radius, 2) * 100) / 100
    );
  }

  circleLength(_radius) {
    log(
      'Length of circle: ' +
        Math.round(this.numberPi * Math.abs(this._radius) * 2 * 100) / 100
    );
  }
}

const circle1 = new Circle();

circle1.radius;
circle1.radius = -5;
circle1.diameter;
circle1.circleSquare();
circle1.circleLength();

export default Circle;
