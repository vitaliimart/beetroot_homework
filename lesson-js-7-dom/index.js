// Завдання 1 - Створити сторінку, що показує нумерований список пісень
let playList = [
  { author: 'LED ZEPPELIN', song: 'STAIRWAY TO HEAVEN' },
  { author: 'QUEEN', song: 'BOHEMIAN RHAPSODY' },
  { author: 'LYNYRD SKYNYRD', song: 'FREE BIRD' },
  { author: 'DEEP PURPLE', song: 'SMOKE ON THE WATER' },
  { author: 'JIMI HENDRIX', song: 'ALL ALONG THE WATCHTOWER' },
  { author: 'AC/DC', song: 'BACK IN BLACK' },
  { author: 'QUEEN', song: 'WE WILL ROCK YOU' },
  { author: 'METALLICA', song: 'ENTER SANDMAN' },
];

const createList = () => {
  const ol = document.createElement('ol');
  ol.classList.add('playlist');

  playList.forEach((item) => {
    const li = document.createElement('li');
    li.innerText = `Song: ${item.song}; author: ${item.author}`;
    li.classList.add('playlist__item');
    ol.appendChild(li);
  });

  document.getElementById('app').appendChild(ol);
};

// Завдання 2 - Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. На модальном вікні повинен бути текст і кнопка "Закрити". Спочатку модальне вікно не відображається. При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає.

// Задача 3 - Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор на наступний колір.
