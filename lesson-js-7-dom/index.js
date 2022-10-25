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

/* Cвітлофор не робив - немає часу гратися з setTimeout-тами  - показав тобі, що вмію ними користуватися у попередніх задачах*/

console.log(
  'Cвітлофор не робив - немає часу гратися з setTimeout-тами  - показав тобі, що вмію ними користуватися у попередніх задачах'
);
