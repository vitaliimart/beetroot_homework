// ?ДОМАШНЕЄ ЗАВДАННЯ: МІНІМУМ
// Завдання 1
let num1 = 0.1;
let num2 = 0.2;
let summ = (num1*10 + num2*10)/10;
alert(`Результат додавання 0.1 та 0.2:  ${summ}`);
// Завдання 2
let number1 = "1";
let number2 = 2;
let sumNumber = number1 + number2;
alert(`В результаті складання строки "1" та числа 2 вийшло: ${sumNumber}`);
// Завдання 3
let storageUsb = Math.abs(+prompt('Введіть, будь-ласка, розмір Вашої флешки в Гб цифрою', ''));
let storageFile = 820;
let numberFiles = Math.floor(storageUsb*1000/820);
alert(`На Вашу флешку розміром ${storageUsb} Гб можна закачати ${numberFiles} файлів розміром ${storageFile} Мб кожний`);

// ?ДОМАШНЕЄ ЗАВДАННЯ: НОРМА
// Завдання 1
let money = Math.abs(+prompt('Введіть, будь-ласка, суму наявних коштів в грн. цифрою', ''));
let priceChocolate = Math.abs(+prompt('Вкажіть вартість 1 плитки шоколаду в грн. цифрою', ''));
let numberChocolates = Math.floor(money/priceChocolate);
let keepChange = money%priceChocolate;
alert(`Отже, за ${money} грн. можна купити ${numberChocolates} плиток шоколаду вартістю ${priceChocolate} грн. за штуку, при цьому у кишені залишиться ${keepChange} грн.`);
// Завдання 2
let randomNumber = prompt('Введіть, будь-ласка, будь-яке тризначне число', '');
if(randomNumber.length !== 3) {
	randomNumber = prompt('Невірно введене число. Спробуйте ще раз. Нагадую - тризначне число', '')
}
// Артур я зробив швидше: я створив самовикликаючу фунццію, в якій я перетворюю строку в масив, потім використовую існуючий метод reverse і потім масив перетворює заново у строку
let reverseNumber = (str) => {
	return str.split('').reverse().join('');
}
alert(`Чудово. Ти правильно ввів потрібне число та отримуєш ось таке зворотнє число: ${reverseNumber(randomNumber)}`);

// ?ДОМАШНЕЄ ЗАВДАННЯ: МАКСИМУМ
// Завдання 1
let deposit = Math.abs(+prompt('Введіть суму депозиту в грн. цифрою', ''));
let durationCurrent = 2;
let durationAll = 12;
let depositRate = 0.05;
let profit = Math.round(deposit*depositRate*durationCurrent/durationAll);
alert(`Прибуток від депозиту складе: ${profit} грн.`);
// Завдання 2
alert(2 && 0 && 3); // запнеться на першому false, тобто виведе 0
alert(2 || 0 || 3); // запнеться на першому true,тобто виведе 2
alert(2 && 0 || 3); // спочатку перевіряється умова 2 && 0, в результаті виходить 0. далі порівнюю 0 і 3, отримуємо 3


