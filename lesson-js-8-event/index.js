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

const rows = 7;
const cols = 4;

const tableHead = [
  'День тижня',
  'Ціна купівлі 1 USD, грн.',
  'Ціна купівлі 1 EUR, грн.',
  'Ціна купівлі 1 PLN, грн.',
];

let col1 = [
    'Понеділок',
    'Вівторок',
    'Середа',
    'Четвер',
    "П'ятниця",
    'Субота',
    'Неділя',
  ],
  col2 = [40.15, 39.85, 39.5, 39.7, 39.225, 39.0, 39.6],
  col3 = [38.33, 38.4, 38.54, 38.75, 38.4, 38.24, 38.4],
  col4 = [8.03, 7.79, 7.89, 7.59, 7.92, 7.84, 7.8];

function createTable() {
  let table = '<table>';
  table +=
    '<caption class="table__title"> Таблиця створена через JS - Курс валют на 24-30.10.2022</caption>';
  ('<h2 class="title"> Таблиця створена через JS - Курс валют на 24-30.10.2022</h2>');
  table += '<tr>';
  for (let value = 0; value < tableHead.length; value++) {
    table += '<th class="js-th">' + tableHead[value] + '</th>';
  }
  table += '</tr>';
  for (let i = 0; i < rows; i++) {
    table += '<tr>';
    for (let j = 0; j < cols; j++) {
      if (j === 0) {
        table += '<td>' + col1[i] + '</td>';
      } else if (j === 1) {
        table += '<td>' + col2[i] + '</td>';
      } else if (j === 2) {
        table += '<td>' + col3[i] + '</td>';
      } else if (j === 3) {
        table += '<td>' + col4[i] + '</td>';
      }
    }
    table += '</tr>';
  }
  table += '</table>';

  tableContainer.innerHTML = table;
}
createTable();

log = console.log;

function sortColumn(arg) {
  arg.sort();
  createTable();
}

const th = document.getElementsByClassName('js-th');
function pushes() {
  for (let i = 0; i < th.length; i++) {
    th[i].addEventListener('click', () => {
      sortColumn(col1);
      sortColumn(col2);
      sortColumn(col3);
      sortColumn(col4);
    });
  }
}

pushes();

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
});

lastDiv.addEventListener('mouseup', (event) => {
  event.preventDefault();
  lastDiv.removeEventListener('mousemove', mouseMove);
});
