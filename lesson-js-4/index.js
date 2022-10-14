// ?ДОМАШНЕЄ ЗАВДАННЯ: МІНІМУМ
// Завдання 1 - Можливі варіанти створення функцій
// Перший спосіб - Function Declaration
function calcSum(a, b) {
  return a + b;
}
console.log(calcSum(2, 3));

// Другий спосіб - Function Expression (стрілкова функція)
let calcMultiplication = (a, b) => {
  return a * b;
};
console.log(calcMultiplication(3, 5));

// Третій спосіб - Function Expression (анонімна функція)
let calcDivision = function (a, b) {
  return a / b;
};
console.log(calcDivision(120, 6));

// Четвертий спосіб - Функція-конструктор
function User(name) {
  this.name = name;
  this.age = 27;
}

let user = new User('Arthur');
console.log(user);

// П'ятий спосіб - Створення функції через клас
class Client {
  constructor(surname) {
    this.surname = surname;
  }

  get surname() {
    return this._surname;
  }

  set surname(value) {
    if (value.length < 4) {
      console.log("Ім'я занадто коротке");
      return;
    }
    this._surname = value;
  }
}

let client = new Client('Ivan');
console.log(client);
client = new Client('');

// Завдання 2 - Функція, яка буде виводити кількість переданих їй аргументів.
function countArgument(a, b, c) {
  return countArgument.length;
}
console.log(countArgument());

// Завдання 3 - Функція з 2-ма аргументами та різними умовами
function showCondition(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else return 0;
}

console.log(showCondition(2, 5));
console.log(showCondition(5, 1));
console.log(showCondition(4, 4));

// Завдання 4 - Функція, яка обчислює факторіал переданого їй числа
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  else return n * factorial(n - 1);
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(6));

// Завдання 5 - Функція, яка приймає три окремі цифри і перетворює їх в одне число
function someNumber(a, b, c) {
  text = String(a) + String(b) + String(c);
  return (sumNumber = Number(text));
}

console.log(someNumber(1, 4, 9));
console.log(typeof sumNumber);

// Завдання 6 - Функція, яка приймає довжину і ширину прямокутника і обчислює його площу
function squareRectangle(a, b) {
  if (b == 0 || b == null) {
    return a ** 2;
  } else if (a == 0 || a == null) {
    return b ** 2;
  } else return a * b;
}

console.log(squareRectangle(5, 7));
console.log(squareRectangle(5));
console.log(squareRectangle(0, 9));

// ?ДОМАШНЕЄ ЗАВДАННЯ: НОРМА
// Завдання 1 - Функція, яка перевіряє, чи є передане їй число “досконалим числом”
const checkNumber = (n) => {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  if (n == sum) {
    return `Введене число ${n} є досконалим`;
  } else {
    return `Число ${n} недосконале`;
  }
};

console.log(checkNumber(6));
console.log(checkNumber(27));

// Завдання 2 - код не мій відразу кажу
const checkingNumber = (min, max) => {
  const result = {};
  for (let i = min; i <= max; i++) {
    result[i] = checkNumber(i);
  }
  return result;
};
console.log(checkingNumber(2, 30));
