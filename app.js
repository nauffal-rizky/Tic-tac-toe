// ALL ELEMENTS NEEDED
const menu = document.querySelector('.menu');
const optionX = menu.querySelector('.option-x');
const optionO = menu.querySelector('.option-o');
const game = document.querySelector('.game');
const players = game.querySelector('.players');
const sections = game.querySelectorAll('.gameboard span');

window.addEventListener('DOMContentLoaded', () => {
  sections.forEach((section) => {
    section.addEventListener('click', () => {
      clickedBox(section);
    });
  });

  menu.classList.add('show');
  optionX.addEventListener('click', () => {
    clickAndDisappear();
  });
  optionO.addEventListener('click', () => {
    clickAndDisappear();
    players.classList.add('active');
  });
});

const clickAndDisappear = () => {
  menu.classList.remove('show');
  game.classList.add('show');
};

const clickedBox = (element) => {
  if (players.classList.contains('active')) {
    element.innerHTML = `O`;
  } else {
    element.innerHTML = `X`;
  }
};
