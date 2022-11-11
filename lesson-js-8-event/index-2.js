// Завдання 1 - Створити HTML-сторінку для відображення/редагування тексту. При відкритті сторінки текст відображається за допомогою тега div. При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом, який тепер можна редагувати. При натисканні Ctrl + S, замість textarea з'являється div з уже зміненим текстом. Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.
let text = null;

const getText = () => {
  return (
    document.getElementById('js-block').value ||
    document.getElementById('js-block').innerText
  );
};

document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyE' && (event.ctrlKey || event.metaKey)) {
    event.preventDefault();
    text = getText();
    document.getElementById(
      'js-block'
    ).outerHTML = `<textarea class="block" id="js-block" rows="5" cols="60">${text}</textarea>`;
    document.getElementById('js-block').innerText = text;
  } else if (event.code === 'KeyS' && (event.ctrlKey || event.metaKey)) {
    event.preventDefault();
    text = getText();
    document.getElementById(
      'js-block'
    ).outerHTML = `<div class="block" id="js-block">${text}</div>`;
    document.getElementById('js-block').innerText = text;
  }
});

// Завдання 2 - Створити HTML-сторінку з великою таблицею. При кліку на заголовок стовпця, необхідно відсортувати дані цього стовпця. Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.
const tableContainer = document.getElementById('js-table-container');

// const rows = 7;
// const cols = 4;

const tableHead = [
  'День тижня',
  'Ціна купівлі 1 USD, грн.',
  'Ціна купівлі 1 EUR, грн.',
  'Ціна купівлі 1 PLN, грн.',
];
const cols = [
  ['Понеділок', 'Вівторок', 'Середа', 'Четвер', "П'ятниця", 'Субота', 'Неділя'],
  [40.15, 39.85, 39.5, 39.7, 39.225, 39.0, 39.6],
  [38.33, 38.4, 38.54, 38.75, 38.4, 38.24, 38.4],
  [8.03, 7.79, 7.89, 7.59, 7.92, 7.84, 7.8],
];

// cols.forEach((col) => {
//   col.forEach((el) => {
//     console.log(el);
//   });
// });

const createElement = (tag = 'div', clas) => {
  const a = document.createElement(tag);
  a.classList.add(clas);
  return a;
};

const sortA = (arr) => {
  arr.forEach(() => {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        cols.forEach((elem) => {
          const el = elem[i];
          elem[i] = elem[i + 1];
          elem[i + 1] = el;
        });
      }
    }
  });
};

function createTable() {
  const table = createElement('table');
  table.setAttribute('id', 'js-table');
  const caption = createElement('caption', 'table__title');
  table.appendChild(caption);
  let tr = createElement('tr');
  for (const el in tableHead) {
    const th = createElement('th');
    th.addEventListener('click', () => {
      sortA(cols[el]);
      createTable();
    });
    th.innerText = tableHead[el];
    tr.appendChild(th);
  }
  table.appendChild(tr);
  for (const el in cols[0]) {
    tr = createElement('tr');
    cols.forEach((item) => {
      const td = createElement('td');
      td.innerText = item[el];
      tr.appendChild(td);
    });
    table.appendChild(tr);
  }

  if (document.getElementById('js-table')) {
    document.getElementById('js-table').remove();
    document.getElementById('js-table-container').appendChild(table);
  } else {
    document.getElementById('js-table-container').appendChild(table);
  }
}
createTable();

// * Завдання 3 - Створити HTML-сторінку з блоком тексту в рамці.
// * Реалізувати можливість змінювати розмір блоку, якщо затиснути мишку в правому нижньому кутку і тягнути її далі.
const lastDiv = document.getElementById('js-last-block');
let currentWidth = lastDiv.offsetWidth;
let currentHeight = lastDiv.offsetHeight;

const mouseMove = (event) => {
  lastWidth = currentWidth + event.pageX - changeWidth;
  lastHeight = currentHeight + event.pageY - changeHeight;
  lastDiv.style.width = lastWidth + 'px';
  lastDiv.style.height = lastHeight + 'px';
};

lastDiv.addEventListener('mousedown', (event) => {
  event.preventDefault();
  changeWidth = event.pageX;
  changeHeight = event.pageY;

  lastDiv.addEventListener('mousemove', mouseMove);
  lastDiv.addEventListener('mousemove', mouseMove);
});

lastDiv.addEventListener('mouseup', (event) => {
  event.preventDefault();
  lastDiv.removeEventListener('mousemove', mouseMove);
  currentWidth = lastDiv.offsetWidth;
  currentHeight = lastDiv.offsetHeight;
});
