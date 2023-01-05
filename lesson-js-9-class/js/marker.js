// ?----------------------------------------------Завдання 2 ----------------------------------

// Реалізуй клас, що описує канцелярський маркер. У класі повинні бути такі компоненти:

// поле, яке зберігає колір маркера;
// поле, яке зберігає кількість чорнил у маркері (у відсотках);
// метод для вводу (приймає рядок і виводить текст відповідним кольором; текст виводиться до тих пір, поки в маркері є чорнило; один не пробільний символ — це 0,5% чорнил у маркері).
// Реалізуй клас, що описує маркер, який можна перезаправляти. Успадкуй цей клас від простого маркера і додай метод для заправки.

// Продемонструй роботу написаних методів.

const div = document.getElementById('js-div');

class Marker {
  _color = 'default color';
  _amount = null;

  constructor(color, amount) {
    if (color && 0 <= amount <= 101) {
      this._color = color;
      this._amount = +amount;
    }
  }

  showColor() {
    const paragragh = document.createElement('p');
    paragragh.innerText = `Колір маркера - ${this._color}`;
    div.appendChild(paragragh);
  }

  showPercent() {
    const paragragh = document.createElement('p');
    paragragh.innerText = `Кількість чорнил у відсотках складає ${this._amount}%`;
    div.appendChild(paragragh);
  }
  enterText() {
    const paragragh = document.createElement('p');
    const text = prompt('Введіть текст для таски з маркером');
    paragragh.innerText = text;
    div.appendChild(paragragh);
    for (let i = 0; i <= text.length; i++) {
      this._amount -= 0.5;
      if (this._amount === 0) {
        return (paragragh.innerText = `${text} - закічилось чорнило у символах, яких більше ніж потрібно`);
      }
    }
    paragragh.style.color = this._color;
    paragragh.innerText = `${text} - це залишки чорнил у маркері = ${this._amount} %`;
  }
}
class ReFillMarker extends Marker {
  reFillMarker(amount) {
    const paragragh = document.createElement('p');
    paragragh.innerText = `Нова кількість чорнил у маркері - перезаправлення ${amount}%`;
    this._amount = amount;
    div.appendChild(paragragh);
  }
}

const markerOrange = new Marker('orange', '25');
markerOrange.showColor();
markerOrange.showPercent();
markerOrange.enterText();

const reFillMarker = new ReFillMarker('silver', '15');
reFillMarker.reFillMarker(70);
reFillMarker.enterText();

export default Marker;
