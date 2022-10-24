// ?-------------ДОМАШНЕЄ ЗАВДАННЯ: МІНІМУМ---------------------------
// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:
let shoppingList = [
  { name: 'milk', quantity: 2, bought: true, price: 32, amount: 64 },
  { name: 'ice-cream', quantity: 10, bought: true, price: 45, amount: 450 },
  { name: 'cheese', quantity: 4, bought: false, price: 27, amount: 108 },
  { name: 'apple', quantity: 1, bought: false, price: 14, amount: 14 },
  { name: 'orange', quantity: 4, bought: false, price: 52, amount: 208 },
];

// Завдання 1 - Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
// shoppingList.sort(function (a) {
//   if (a.bought == false) {
//     return -1;
//   } else {
//     return 1;
//   }
// });
// console.log('Сортування масиву: спочатку false, потім true');
// console.log(shoppingList);

// Завдання 2 - Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
// function buyProduct(name) {
//   for (let key in shoppingList) {
//     if (shoppingList[key].name == name) {
//       shoppingList[key].bought = true;
//     } else {
//       shoppingList[key];
//     }
//   }
// }

// buyProduct('apple');
// console.log('Ця функція змінює у полі "bought" значення false на true');
// console.log(shoppingList);

// ?--------------------ДОМАШНЕЄ ЗАВДАННЯ: НОРМА----------------------
// Задача 1 - Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)

// shoppingList.splice(
//   2,
//   1,
//   'тут видалено елемент через splice - можу прибрати інфо'
// );
// let shoppingListNew = [];

// shoppingList.filter(() => {
//   for (let key in shoppingList) {
//     if (key == undefined) {
//       continue;
//     } else {
//       for (let i = 0; i < shoppingList.length; i++) {
//         shoppingListNew[i] = shoppingList[i];
//       }
//     }
//   }
// });

// console.log('Цей список сформовано з видаленням заданого індексу масиву');
// console.log(shoppingListNew);

// Задача 2 - Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.
function addPurchase(name, quantity, bought, price) {
  for (let key = 0; key < shoppingList.length; key++) {
    if (shoppingList[key].name == name) {
      shoppingList[key].quantity += quantity;
      shoppingList[key].amount =
        shoppingList[key].quantity * shoppingList[key].price;
      break;
    } else {
      shoppingList.push({
        name: name,
        quantity: quantity,
        bought: bought,
        price: price,
        amount: quantity * price,
      });
      break;
    }
  }
}

addPurchase('pipe', 1, false, 56);
addPurchase('onion', 13, true, 123);
addPurchase('milk', 45);
addPurchase('orange', 45);

console.log('Цей список сформовано на основі додавання нових елементів');
console.log(shoppingList);

// ?--------------------ДОМАШНЕЄ ЗАВДАННЯ: МАКСИМУМ----------------------
// Задача 1 - Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.

// Задача 2 - Підрахунок суми всіх (не) придбаних продуктів.

// Задача 3 - Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, в залежності від параметра функції, який вона приймає)
