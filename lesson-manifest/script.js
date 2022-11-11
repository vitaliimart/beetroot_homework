const burger = document.getElementById('js-burger');
const modal = document.getElementById('js-list');

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  modal.classList.toggle('modal--show');
});
