// Завдання 1 - Створити сторінку, що показує нумерований список пісень
const playList = [
  { author: 'LED ZEPPELIN', song: 'STAIRWAY TO HEAVEN' },
  { author: 'QUEEN', song: 'BOHEMIAN RHAPSODY' },
  { author: 'LYNYRD SKYNYRD', song: 'FREE BIRD' },
  { author: 'DEEP PURPLE', song: 'SMOKE ON THE WATER' },
  { author: 'JIMI HENDRIX', song: 'ALL ALONG THE WATCHTOWER' },
  { author: 'AC/DC', song: 'BACK IN BLACK' },
  { author: 'QUEEN', song: 'WE WILL ROCK YOU' },
  { author: 'METALLICA', song: 'ENTER SANDMAN' },
];

setTimeout(() => (document.body.style.background = 'lightgray'), 1500);

setTimeout(() => {
  const ol = document.createElement('ol');
  ol.classList.add('playlist');

  playList.forEach((item) => {
    const li = document.createElement('li');
    li.innerText = `Song: ${item.song}; author: ${item.author}`;
    li.classList.add('playlist__item');
    ol.appendChild(li);
  });
  document.getElementById('app').appendChild(ol);
}, 3000);

// Завдання 2 - Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. На модальном вікні повинен бути текст і кнопка "Закрити". Спочатку модальне вікно не відображається. При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає.

const fpage = document.getElementById('js-firstpage');
const modal = document.getElementById('js-modal');
const openBtn = document.getElementById('js-open');
const closeBtn = document.getElementById('js-close');

openBtn.addEventListener('click', () => {
  modal.style.display = 'block';
  fpage.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  fpage.style.display = 'block';
});

// Завдання 3 - Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор на наступний колір.
const greenColor = document.getElementById('js-green');
const yellowColor = document.getElementById('js-yellow');
const redColor = document.getElementById('js-red');
const changeBtn = document.getElementById('js-choose');

let count = 1;
changeBtn.addEventListener('click', () => {
  if (count === 1) {
    greenColor.style.backgroundColor = 'green';
    count++;
  } else if (count === 2) {
    yellowColor.style.backgroundColor = 'yellow';
    greenColor.style.backgroundColor = '';

    count++;
  } else if (count === 3) {
    greenColor.style.backgroundColor = '';
    yellowColor.style.backgroundColor = '';
    redColor.style.backgroundColor = 'red';
    count++;
  } else {
    redColor.style.backgroundColor = '';
    yellowColor.style.backgroundColor = '';
    greenColor.style.backgroundColor = '';
    count = 1;
  }
});
