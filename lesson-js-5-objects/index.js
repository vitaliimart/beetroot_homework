// ?-------------ДОМАШНЕЄ ЗАВДАННЯ: МІНІМУМ---------------------------
const car = {
  producer: 'Japan',
  model: 'Akura',
  'year of production': 2012,
  middleSpeed: 140,
  volumeFuel: 40,
  consumptionFuel: 14,
  driver: prompt("Введіть будь-яке ім'я водія"),
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
  // Задача 2 - Функція, що перераховує базовий час, якщо я ввів секунди
  // Код великий, тому що я вирішив додати трохи краси у вигляді "0"
  (myTime.showChangeSecond = () => {
    let tempSeconds = Math.abs(
      +prompt('Введіть будь-яку кількість секунд числом')
    );

    if (tempSeconds < 60) {
      myTime.seconds += tempSeconds;

      if (myTime.hours == 0 || myTime.hours < 10) {
        myTime.hours = String(0) + myTime.hours;
      }
      if (myTime.minutes == 0 || myTime.minutes < 10) {
        myTime.minutes = String(0) + myTime.minutes;
      }
      if (myTime.seconds < 10) {
        myTime.seconds = String(0) + myTime.seconds;
      }
      console.log(
        `Переданий час (у секундах) ${myTime.hours}:${myTime.minutes}:${myTime.seconds}`
      );
    } else if (tempSeconds >= 60 && tempSeconds < 3600) {
      myTime.minutes += Math.floor(tempSeconds / 60);
      myTime.seconds += Math.floor(tempSeconds % 60);
      if (myTime.hours == 0 || myTime.hours < 10) {
        myTime.hours = String(0) + myTime.hours;
      }
      if (myTime.minutes < 10) {
        myTime.minutes = String(0) + myTime.minutes;
      }
      if (myTime.seconds < 10) {
        myTime.seconds = String(0) + myTime.seconds;
      }
      console.log(
        `Переданий час ${myTime.hours}:${myTime.minutes}:${myTime.seconds}`
      );
    } else if (tempSeconds >= 3600 && tempSeconds <= 86400) {
      myTime.hours += Math.floor(tempSeconds / 3600);
      myTime.minutes += Math.floor(Math.floor(tempSeconds % 3600) / 60);
      myTime.seconds += Math.floor(Math.floor(tempSeconds % 3600) % 60);
      if (myTime.hours < 10) {
        myTime.hours = String(0) + myTime.hours;
      }
      if (myTime.minutes < 10) {
        myTime.minutes = String(0) + myTime.minutes;
      }
      if (myTime.seconds < 10) {
        myTime.seconds = String(0) + myTime.seconds;
      }
      console.log(
        `Переданий час (через зміну секунд): ${myTime.hours}:${myTime.minutes}:${myTime.seconds}`
      );
    } else {
      console.log('Ви ввели проміжок часу більше, ніж 24 години');
    }
  });
// myTime.showChangeSecond();

// Задача 3 - Функція, що перераховує базовий час, якщо я ввів хвилини
// Код великий, тому що я вирішив додати трохи краси у вигляді "0"
myTime.showChangeMinutes = () => {
  let tempMinutes = Math.abs(
    +prompt('Введіть будь-яку кількість хвилин числом')
  );

  if (tempMinutes > 0 && tempMinutes < 60) {
    myTime.minutes += tempMinutes;
    if (myTime.hours == 0 || myTime.hours < 10) {
      myTime.hours = String(0) + myTime.hours;
    }
    if (myTime.minutes < 10) {
      myTime.minutes = String(0) + myTime.minutes;
    }
    if (myTime.seconds == 0 || myTime.seconds < 10) {
      myTime.seconds = String(0) + myTime.seconds;
    }
    console.log(
      `Переданий час: ${myTime.hours}:${myTime.minutes}:${myTime.seconds}`
    );
  } else if (tempMinutes >= 60 && tempMinutes <= 1440) {
    myTime.hours += Math.floor(tempMinutes / 60);
    myTime.minutes += Math.floor(tempMinutes % 60);
    myTime.seconds += Math.floor(((tempMinutes % 60) * 60) / 60);
    if (myTime.hours == 0 || myTime.hours < 10) {
      myTime.hours = String(0) + myTime.hours;
    }
    if (myTime.minutes == 0 || myTime.minutes < 10) {
      myTime.minutes = String(0) + myTime.minutes;
    }
    if (myTime.seconds == 0 || myTime.seconds < 10) {
      myTime.seconds = String(0) + myTime.seconds;
    }
    console.log(
      `Переданий час (через зміну хвилин): ${myTime.hours}:${myTime.minutes}:${myTime.seconds}`
    );
  } else {
    console.log('Ви ввели проміжок часу більше, ніж 24 години');
  }
};
// myTime.showChangeMinutes();

// Задача 4 - Функція, що перераховує базовий час, якщо я ввів години
// Код великий, тому що я вирішив додати трохи краси у вигляді "0"
myTime.showChangeHours = () => {
  let tempHours = Math.abs(+prompt('Введіть будь-яку кількість годин числом'));

  if (tempHours > 0 && tempHours <= 24) {
    myTime.hours += Math.floor(tempHours);
    myTime.minutes += Math.floor((tempHours - myTime.hours) * 60);
    myTime.seconds += Math.floor(
      ((tempHours - myTime.hours) * 60 - myTime.minutes) * 60
    );
    if (myTime.hours < 10) {
      myTime.hours = String(0) + myTime.hours;
    }
    if (myTime.minutes < 10) {
      myTime.minutes = String(0) + myTime.minutes;
    }
    if (myTime.seconds == 0 || myTime.seconds < 10) {
      myTime.seconds = String(0) + myTime.seconds;
    }
    console.log(
      `Переданий час (через зміну годин): ${myTime.hours}:${myTime.minutes}:${myTime.seconds}`
    );
  } else {
    console.log('Ви ввели проміжок часу більше, ніж 24 години');
  }
};
// myTime.showChangeHours();

let taskNorma = prompt(
  'Щоб побачити рішення ДЗ:НОРМА, введи №: 1 (функція показує базовий час), 2(зміна часу через введення секунд), 3(зміна часу через введення хвилин) або 4(зміна часу через введення годин). Дивись в консоль'
);
if (taskNorma == '1') {
  myTime.showBaseTime();
} else if (taskNorma == '2') {
  myTime.showChangeSecond();
} else if (taskNorma == '3') {
  myTime.showChangeMinutes();
} else if (taskNorma == '4') {
  myTime.showChangeHours();
} else {
  console.log(
    'Якщо ти ввів інше значення, то тобі не цікаво перевіряти моє дз)))'
  );
}
