// ALL ELEMENTS NEEDED
const menu = document.querySelector('.menu');
const optionX = menu.querySelector('.option-x');
const optionO = menu.querySelector('.option-o');
const game = document.querySelector('.game');
const players = game.querySelector('.players');
const sections = game.querySelectorAll('.gameboard span');
const resultBox = document.querySelector('.result-box');
const playerWon = resultBox.querySelector('.result-text');
const replayBtn = resultBox.querySelector('.replay-btn');

// ID
let playerSign = '';

// isBotActive
let runBot = true;

window.addEventListener('DOMContentLoaded', () => {
  sections.forEach((section) => {
    section.addEventListener('click', () => {
      clickedBox(section);
    });
  });

  menu.classList.add('show');
  optionX.addEventListener('click', () => {
    menu.classList.remove('show');
    game.classList.add('show');

    playerSign = 'X';
  });
  optionO.addEventListener('click', () => {
    menu.classList.remove('show');
    game.classList.add('show');

    players.classList.add('active');
    playerSign = 'O';
  });
});

const clickedBox = (element) => {
  if (players.classList.contains('active')) {
    players.classList.remove('active');
    element.innerHTML = `O`;

    playerSign = 'O';
    element.setAttribute('id', playerSign);
  } else {
    players.classList.add('active');
    element.innerHTML = `X`;

    playerSign = 'X';
    element.setAttribute('id', playerSign);
  }
  game.style.pointerEvents = 'none';
  element.style.pointerEvents = 'none';
  getWinner();

  let randomDisplayDelay = (Math.random() * 1000 + 200).toFixed();
  setTimeout(() => {
    bot(runBot);
  }, randomDisplayDelay);
};

const bot = (runBot) => {
  if (runBot) {
    let boxLeft = [];
    for (let i = 0; i < sections.length; i++) {
      if (sections[i].innerText == ``) {
        boxLeft.push(i);
      }
    }

    let randomNumber = boxLeft[Math.floor(Math.random() * boxLeft.length)];
    playerSign = 'O';

    if (boxLeft.length > 0) {
      if (players.classList.contains('active')) {
        players.classList.remove('active');
        sections[randomNumber].innerHTML = `O`;

        playerSign = 'O';
        sections[randomNumber].setAttribute('id', playerSign);
      } else {
        players.classList.add('active');
        sections[randomNumber].innerHTML = `X`;

        playerSign = 'X';
        sections[randomNumber].setAttribute('id', playerSign);
      }
      sections[randomNumber].style.pointerEvents = 'none';
      game.style.pointerEvents = 'auto';
      getWinner();
    }
  }
};

const getId = (id) => {
  return document.querySelector(`.box-${id}`).id;
};
const checkId = (val1, val2, val3, sign) => {
  if (getId(val1) == sign && getId(val2) == sign && getId(val3) == sign) {
    return true;
  }
};
const getWinner = () => {
  if (
    checkId(1, 2, 3, playerSign) ||
    checkId(4, 5, 6, playerSign) ||
    checkId(7, 8, 9, playerSign) ||
    checkId(1, 4, 7, playerSign) ||
    checkId(2, 5, 8, playerSign) ||
    checkId(3, 6, 9, playerSign) ||
    checkId(1, 5, 9, playerSign) ||
    checkId(3, 5, 7, playerSign)
  ) {
    console.log(`${playerSign} is the winner!!!`);

    runBot = false;
    bot(runBot);

    setTimeout(() => {
      game.classList.remove('show');
      resultBox.classList.add('show');
      playerWon.innerText = `Player ${playerSign} won the game!`;
    }, 700);
  } else if (getId(1) != '' && getId(2) != '' && getId(3) != '' && getId(4) != '' && getId(5) != '' && getId(6) != '' && getId(7) != '' && getId(8) != '' && getId(9) != '') {
    setTimeout(() => {
      game.classList.remove('show');
      resultBox.classList.add('show');
      playerWon.innerText = `Match has been drawn!`;
    }, 700);
  }
};
replayBtn.addEventListener('click', () => {
  window.location.reload();
});
