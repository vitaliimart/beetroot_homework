// ?ДОМАШНЕЄ ЗАВДАННЯ: МІНІМУМ
// Завдання 1
let age;

do {
	age = Math.abs(+prompt('Мінімум. Завдання 1 (Перевірка віку). Введіть свій вік', ''));
	if (age >= 0.1 && age <= 11.99) {
		alert (`Ви є дитиною, бо Вам ${age} років`);
	} else if (age >= 12 && age <= 17.99) {
		alert (`Ви є підлітком, бо Вам ${age} років`);
	} else if (age >= 18 && age <= 59.99) {
		alert (`Ви є дорослим, бо Вам ${age} років`);
	} else if (age >= 60 && age <= 122) {
		alert (`Ви є пенсіонером, бо Вам ${age} років`);
	} else {
		alert ('Ви ввели невірно свій вік');
	}
} while (age >= 122.1 || age == '' || age == 0 || age == null);

// Завдання 2
const anyNumber = prompt('Мінімум. Завдання 2 (Switch). Введіть будь-яке число від 0 до 9');

switch (anyNumber) {
	case '0': {
		alert ('Введеній цифрі відповідає символ ")"');
		break;
	}
	case '1': {
		alert ('Введеній цифрі відповідає символ "!"');
		break;
	}
	case '2': {
		alert ('Введеній цифрі відповідає символ "@"');
		break;
	}
	case '3': {
		alert ('Введеній цифрі відповідає символ "#"');
		break;
	}
	case '4': {
		alert ('Введеній цифрі відповідає символ "$"');
		break;
	}
	case '5': {
		alert ('Введеній цифрі відповідає символ "%"');
		break;
	}
	case '6': {
		alert ('Введеній цифрі відповідає символ "^"');
		break;
	}
	case '7': {
		alert ('Введеній цифрі відповідає символ "&"');
		break;
	}
	case '8': {
		alert ('Введеній цифрі відповідає символ "*"');
		break;
	}
		case '9': {
		alert ('Введеній цифрі відповідає символ "("');
		break;
	}
	default: {
		alert ('Ви ввели цифру не з діапазону від 0 до 9');
		break;
	}
}

// Завдання 3
let firstNumber = +prompt('Мінімум. Завдання 3 (Сума чисел в діапазоні). Введіть перше число', '');
let secondNumber = +prompt('Мінімум. Завдання 3 (Сума чисел в діапазоні). Введіть друге число', '');
let amount = 0;
if (firstNumber < secondNumber) {
	for (firstNumber; firstNumber <= secondNumber; firstNumber++) {
		amount += firstNumber;
	}
} else if (firstNumber > secondNumber) {
	for (secondNumber; secondNumber <= firstNumber; secondNumber++) {
		amount += secondNumber;
	}
} else {
	amount += firstNumber;
}

alert(`Сума всіх чисел у цьому діапазоні складає ${amount}`);

// Завдання 4
const value1 = +prompt('Мінімум. Завдання 4 (Найбільший спільний дільник). Введіть перше число', '');
const value2 = +prompt('Мінімум. Завдання 4 (Найбільший спільний дільник). Введіть друге число', '');
let divider = 0;

for (let i = 1; i <= Math.min(value1, value2); i++) {
	if (value1 % i == 0 && value2 % i == 0 ) {
		divider = i;
	}
}
alert(`Найбільший спільний дільник ${divider}`);

// Завдання 5
const anyValue = +prompt('Мінімум. Завдання 5 (Всі дільники числа). Введіть будь-яке число', '');
alert('Артур, відповідь на це завдання дивись у консолі');

if (anyValue <= 0) {
	let i =  anyValue;
	for (i; i <= Math.abs(anyValue); i++ ) {
		console.log(`Всі дільники числа ${anyValue}: ${i}`);
	}
} else {
	let i =  -anyValue;
	for (i; i <= anyValue; i++ ) 
	{
		console.log(`Всі дільники числа ${anyValue}: ${i}`);
	}
}

// ?ДОМАШНЕЄ ЗАВДАННЯ: НОРМА
// Завдання 1
const numeric = prompt('Норма. Завдання 1 (Перевірка на поліндром). Введіть будь-яке 5-значне число', '');
const lastIndex = numeric.length - 1;
let isPolindrom = true;

for (let i = 0; i <= Math.round(lastIndex/2); i++) {
  if (numeric[i] !== numeric[lastIndex - i]) {
    isPolindrom = false;
    break;
  }
}
if(isPolindrom) {
  alert(`Число ${numeric} є поліндромом`);
} else {
  alert(`Число ${numeric} неполіндром`);
}

// Завдання 2
const amounts = Math.abs(+prompt('Норма. Завдання 2 (Ціна зі знижкою). Введіть, будь-ласка, суму покупки в гривнях - цифрою', '0'));
let discount;
let amountsDiscount;

if (amounts >= 200 && amounts <= 300) {
	discount = 3;
} else if (amounts > 300 && amounts <= 500) {
	discount = 5;
} else if (amounts > 500) {
	discount = 7;
} else {
	discount = 0;
}
amountsDiscount = amounts * (100 - discount) / 100;
alert(`Так як початкова вартість товару ${amounts} грн., тому для нього діє знижка ${discount}%. Кінцева вартість товару становить ${amountsDiscount} грн.`);

// Завдання 3
const arrayString = prompt('Норма. Завдання 3 (Підрахунок кількості різних чисел). Введіть 10 будь-яких цілих чисел через пробіл', '');
const arrayNumber = arrayString.split(' ');
const lengthString = arrayNumber.length;
let positiveNumbers = 0;
let negativeNumbers = 0;
let zero = 0;
let evenNumbers = 0;
let oddNumbers = 0;
console.log(arrayNumber);
for (let i = 0; i < lengthString; i++) {
	if (arrayNumber[i] > 0) {
		positiveNumbers += 1;
	} else if (arrayNumber[i] < 0) {
		negativeNumbers += 1;
	} else {
		zero += 1;
	}

	if (arrayNumber[i] % 2 == 0) {
		evenNumbers += 1;
	} else {
		oddNumbers += 1;
	}
}
console.log(`Ви ввели ${lengthString} чисел, з яких: додатних - ${positiveNumbers}, від'ємних - ${negativeNumbers}, нуль - ввели ${zero} раз`);
alert(`Ви ввели ${lengthString} чисел, з яких: парних (в тому числі, нуль) - ${evenNumbers}, непарних - ${oddNumbers}; додатних - ${positiveNumbers}, від'ємних - ${negativeNumbers}, "0" - ввели ${zero} раз`);

// Завдання 4
let answer;
let dayOfWeek = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота', 'Неділя'];

	for (let i = 0; i < dayOfWeek.length; i++) {
		if (answer != false) {
			answer = confirm (`Норма. Завдання 4. ${dayOfWeek[i]}. Хочеш побачити наступний день?`);
		}
	}

// ?ДОМАШНЕЄ ЗАВДАННЯ: МАКСИМУМ
// Завдання 1

// Завдання 2

