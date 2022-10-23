// ?-------------ДОМАШНЕЄ ЗАВДАННЯ: МІНІМУМ---------------------------
const car = {
  producer: 'Japan',
  model: 'Akura',
  'year of production': 2012,
  middleSpeed: 140,
  volumeFuel: 40,
  consumptionFuel: 14,
  // driver: prompt("Введіть будь-яке ім'я водія"),
};

// Завдання 1 - Метод, який виводить на екран інформацію про автомобіль
car.showInfo = () => {
  for (key in car) {
    if (typeof car[key] !== 'function') {
      console.log(key + ': ' + car[key]);
    }
  }
};
car.showInfo();

// Завдання 2 - Додавання ім’я водія у список
let listDrivers = ['Андрій', 'Ярик', 'Петро', 'якийсь Орест)))'];

car.addVodii = () => {
  for (key in car) {
    if (typeof car[key] !== 'function' && key == 'driver') {
      listDrivers.push(car[key]);
    }
  }
};

car.addVodii();
console.log(listDrivers);

// Завдання 3 - Перевірка водія на наявність його ім’я у списку
car.checkVodii = () => {
  let name = prompt(
    "Введіть ім'я водія. Спробуйте ввести - Андрій,Ярик,Петро чи введене через промпт"
  );
  for (let key of listDrivers) {
    if (key == name) {
      console.log(`Введене ім'я ${name} є у списку водіїв`);
      break;
    } else {
      console.log(`Такого імені ${name} немає у списку водіїв`);
    }
  }
};
car.checkVodii();

// Завдання 4 - Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину.
car.getTimeFuel = () => {
  let distance = null,
    activeTime = null,
    roadTime = null,
    roadFuel = null;
  distance = Math.abs(
    +prompt('Введіть відстань, яку треба проїхати на автомобілі, в км')
  );
  activeTime = Math.round((distance / car.middleSpeed) * 10) / 10;
  if (activeTime / 4 >= 1) {
    roadTime = activeTime + Math.round(activeTime / 4);
  } else {
    roadTime = activeTime;
  }
  roadFuel = Math.round((distance / car.consumptionFuel) * 10) / 10;
  console.log(
    `Автівка із сер.швидкістю ${car.middleSpeed}км/год та витратою палива ${car.consumptionFuel}л на 100км може подолати відстань в ${distance}км за ${roadTime}годин, витративши на всю дорогу ${roadFuel}л бензину`
  );
};

car.getTimeFuel();

// ?--------------------ДОМАШНЕЄ ЗАВДАННЯ: НОРМА----------------------
let myTime = {
  hours: 0,
  minutes: 0,
  seconds: 0,
};

// Задача 1 - Функція, що показує заданий мною час в об'єкті
(myTime.showBaseTime = () => {
  console.log(
    'Годин:',
    myTime.hours,
    'Хвилин:',
    myTime.minutes,
    'Секунд:',
    myTime.seconds
  );
}),
  myTime.showBaseTime();
// Задача 2 - Функція, що перераховує базовий час, якщо я ввів секунди
myTime.showChangeSecond = () => {
  let tempSeconds = Math.abs(
    +prompt('Введіть будь-яку кількість секунд числом')
  );

  if (tempSeconds < 60) {
    myTime.seconds += tempSeconds;
    console.log(
      `Переданий час (у секундах) - годин: ${myTime.hours}, хвилин: ${myTime.minutes}, секунд: ${myTime.seconds}`
    );
  } else if (tempSeconds >= 60 && tempSeconds < 3600) {
    myTime.minutes += Math.floor(tempSeconds / 60);
    myTime.seconds += Math.floor(tempSeconds % 60);
    console.log(
      `Переданий час (через зміну секунд) - годин: ${myTime.hours}, хвилин: ${myTime.minutes}, секунд: ${myTime.seconds}`
    );
  } else if (tempSeconds >= 3600 && tempSeconds <= 86400) {
    myTime.hours += Math.floor(tempSeconds / 3600);
    myTime.minutes += Math.floor(Math.floor(tempSeconds % 3600) / 60);
    myTime.seconds += Math.floor(Math.floor(tempSeconds % 3600) % 60);
    console.log(
      `Переданий час (через зміну секунд) - годин: ${myTime.hours}, хвилин: ${myTime.minutes}, секунд: ${myTime.seconds}`
    );
  } else {
    console.log('Ви ввели проміжок часу більше, ніж 24 години');
  }
};
myTime.showChangeSecond();

// Задача 3 - Функція, що перераховує базовий час, якщо я ввів хвилини
myTime.showChangeMinutes = () => {
  let tempMinutes = Math.abs(
    +prompt('Введіть будь-яку кількість хвилин числом')
  );

  if (tempMinutes > 0 && tempMinutes < 60) {
    myTime.minutes += tempMinutes;
    console.log(
      `Переданий час (через зміну хвилин) - годин: ${myTime.hours}, хвилин: ${myTime.minutes}, секунд: ${myTime.seconds}`
    );
  } else if (tempMinutes >= 60 && tempMinutes <= 1440) {
    myTime.hours += Math.floor(tempMinutes / 60);
    myTime.minutes += Math.floor(tempMinutes % 60);
    myTime.seconds += Math.floor(((tempMinutes % 60) * 60) / 60);
    console.log(
      `Переданий час (через зміну хвилин) - годин: ${myTime.hours}, хвилин: ${myTime.minutes}, секунд: ${myTime.seconds}`
    );
  } else {
    console.log('Ви ввели проміжок часу більше, ніж 24 години');
  }
};
myTime.showChangeMinutes();

// Задача 4 - Функція, що перераховує базовий час, якщо я ввів години
myTime.showChangeHours = () => {
  let tempHours = Math.abs(+prompt('Введіть будь-яку кількість годин числом'));

  if (tempHours >= 0 && tempHours <= 24) {
    myTime.hours += Math.floor(tempHours);

    myTime.minutes += Math.floor(tempHours * 60 - Math.floor(tempHours) * 60);
    if (myTime.minutes >= 60) {
      myTime.hours += Math.floor(myTime.minutes / 60);
      myTime.minutes += Math.floor(myTime.minutes % 60);
    }

    myTime.seconds += Math.floor(
      tempHours * 60 -
        Math.floor(tempHours) * 60 -
        Math.floor(tempHours * 60 - Math.floor(tempHours) * 60)
    );
    if (myTime.seconds >= 60) {
      myTime.minutes += Math.floor(myTime.seconds / 60);
      myTime.seconds += Math.floor(myTime.seconds % 60);
    }

    console.log(
      `Переданий час (через зміну годин) - годин: ${myTime.hours}, хвилин: ${myTime.minutes}, секунд: ${myTime.seconds}`
    );
  } else {
    console.log('Ви ввели проміжок часу більше, ніж 24 години');
  }
};
myTime.showChangeHours();

// ?--------------------ДОМАШНЕЄ ЗАВДАННЯ: МАКСИМУМ----------------------
let fractionFirst = {
  x: +prompt(`Перший дріб. Чисельник - введіть будь-яке число цифрою`),
  y: +prompt(`Перший дріб. Знаменник - введіть будь-яке число цифрою`),
};

let fractionSecond = {
  x: +prompt(`Другий дріб. Чисельник - введіть будь-яке число цифрою`),
  y: +prompt(`Другий дріб. Знаменник - введіть будь-яке число цифрою`),
};

let fractionMath = {
  x: null,
  y: null,
  fractionSum() {
    if (
      fractionFirst.x !== ' ' &&
      fractionFirst.y !== ' ' &&
      fractionSecond.x !== ' ' &&
      fractionSecond.y !== ' ' &&
      fractionFirst.x !== 0 &&
      fractionFirst.y !== 0 &&
      fractionSecond.x !== 0 &&
      fractionSecond.y !== 0 &&
      fractionFirst.y == fractionSecond.y
    ) {
      fractionMath.x = fractionFirst.x + fractionSecond.x;
      fractionMath.y = fractionFirst.y;
      console.log(
        `В результаті додавання двох дробів ${fractionFirst.x}/${fractionFirst.y} та ${fractionSecond.x}/${fractionSecond.y} отримано новий дріб ${fractionMath.x}/${fractionMath.y}`
      );
    } else if (fractionFirst.y !== fractionSecond.y) {
      fractionMath.x =
        fractionFirst.x * fractionSecond.y + fractionSecond.x * fractionFirst.y;
      fractionMath.y = fractionFirst.y * fractionSecond.y;
      console.log(
        `В результаті додавання двох дробів ${fractionFirst.x}/${fractionFirst.y} та ${fractionSecond.x}/${fractionSecond.y} отримано новий дріб ${fractionMath.x}/${fractionMath.y}`
      );
    } else {
      console.log(
        'Ви ввели не коректні значення, а тому сталася помилка при додаванні дробів'
      );
    }
  },

  fractionSubtraction() {
    if (
      fractionFirst.x !== ' ' &&
      fractionFirst.y !== ' ' &&
      fractionSecond.x !== ' ' &&
      fractionSecond.y !== ' ' &&
      fractionFirst.x !== 0 &&
      fractionFirst.y !== 0 &&
      fractionSecond.x !== 0 &&
      fractionSecond.y !== 0 &&
      fractionFirst.y == fractionSecond.y
    ) {
      fractionMath.x = fractionFirst.x - fractionSecond.x;
      fractionMath.y = fractionFirst.y;
      console.log(
        `В результаті віднімання двох дробів ${fractionFirst.x}/${fractionFirst.y} та ${fractionSecond.x}/${fractionSecond.y} отримано новий дріб ${fractionMath.x}/${fractionMath.y}`
      );
    } else if (fractionFirst.y !== fractionSecond.y) {
      fractionMath.x =
        fractionFirst.x * fractionSecond.y - fractionSecond.x * fractionFirst.y;
      fractionMath.y = fractionFirst.y * fractionSecond.y;
      console.log(
        `В результаті віднімання двох дробів ${fractionFirst.x}/${fractionFirst.y} та ${fractionSecond.x}/${fractionSecond.y} отримано новий дріб ${fractionMath.x}/${fractionMath.y}`
      );
    } else {
      console.log(
        'Ви ввели не коректні значення, а тому сталася помилка при відніманні дробів'
      );
    }
  },
  fractionMultiplication() {
    if (
      fractionFirst.x !== 0 &&
      fractionFirst.y !== 0 &&
      fractionSecond.x !== 0 &&
      fractionSecond.y !== 0
    ) {
      fractionMath.x = fractionFirst.x * fractionSecond.x;
      fractionMath.y = fractionFirst.y * fractionSecond.y;
      console.log(
        `В результаті множення двох дробів ${fractionFirst.x}/${fractionFirst.y} та ${fractionSecond.x}/${fractionSecond.y} отримано новий дріб ${fractionMath.x}/${fractionMath.y}`
      );
    } else {
      console.log(
        'Ви ввели не коректні значення, а тому сталася помилка при множенні дробів'
      );
    }
  },

  fractionDivision() {
    if (
      fractionFirst.x !== 0 &&
      fractionFirst.y !== 0 &&
      fractionSecond.x !== 0 &&
      fractionSecond.y !== 0 &&
      fractionFirst.x == fractionSecond.x &&
      fractionFirst.y == fractionSecond.y
    ) {
      fractionMath.x = 1;
      fractionMath.y = 1;
      console.log(
        `В результаті ділення двох дробів ${fractionFirst.x}/${fractionFirst.y} та ${fractionSecond.x}/${fractionSecond.y} отримано новий дріб ${fractionMath.x}/${fractionMath.y}`
      );
    } else if (
      fractionFirst.x !== 0 &&
      fractionFirst.y !== 0 &&
      fractionSecond.x !== 0 &&
      fractionSecond.y !== 0 &&
      fractionFirst.x !== fractionSecond.x &&
      fractionFirst.y !== fractionSecond.y
    ) {
      fractionMath.x = fractionFirst.x * fractionSecond.y;
      fractionMath.y = fractionFirst.y * fractionSecond.x;
      console.log(
        `В результаті ділення двох дробів ${fractionFirst.x}/${fractionFirst.y} та ${fractionSecond.x}/${fractionSecond.y} отримано новий дріб ${fractionMath.x}/${fractionMath.y}`
      );
    } else {
      console.log(
        'Ви ввели не коректні значення, а тому сталася помилка при діленні дробів'
      );
    }
  },

  fractionReduction() {
    if (fractionFirst.y % fractionFirst.x == 0) {
      fractionFirst.y = fractionFirst.y / fractionFirst.x;
      fractionFirst.x = 1;
      console.log(
        `В результаті скорочення отримано новий дріб ${fractionFirst.x}/${fractionFirst.y}`
      );
    } else if (fractionFirst.x % 2 == 0 && fractionFirst.y % 2 == 0) {
      fractionFirst.x = fractionFirst.x / 2;
      fractionFirst.y = fractionFirst.y / 2;
      console.log(
        `В результаті скорочення отримано новий дріб ${fractionFirst.x}/${fractionFirst.y}`
      );
    } else if (fractionFirst.x % 3 == 0 && fractionFirst.y % 3 == 0) {
      fractionFirst.x = fractionFirst.x / 3;
      fractionFirst.y = fractionFirst.y / 3;
      console.log(
        `В результаті скорочення отримано новий дріб ${fractionFirst.x}/${fractionFirst.y}`
      );
    } else if (fractionFirst.x % 5 == 0 && fractionFirst.y % 5 == 0) {
      fractionFirst.x = fractionFirst.x / 5;
      fractionFirst.y = fractionFirst.y / 5;
      console.log(
        `В результаті скорочення отримано новий дріб ${fractionFirst.x}/${fractionFirst.y}`
      );
    } else if (fractionFirst.x % 7 == 0 && fractionFirst.y % 7 == 0) {
      fractionFirst.x = fractionFirst.x / 7;
      fractionFirst.y = fractionFirst.y / 7;
      console.log(
        `В результаті скорочення отримано новий дріб ${fractionFirst.x}/${fractionFirst.y}`
      );
    } else {
      console.log(
        `Даний дріб ${fractionFirst.x}/${fractionFirst.y} не скорочується`
      );
    }
  },
};

fractionMath.fractionSum();
fractionMath.fractionSubtraction();
fractionMath.fractionMultiplication();
fractionMath.fractionDivision();
fractionMath.fractionReduction();
