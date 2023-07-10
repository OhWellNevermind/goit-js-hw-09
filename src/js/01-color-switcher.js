const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};

let timerId;
refs.stopBtn.disabled = true;

refs.startBtn.addEventListener('click', () => {
  changeBackgroundColor();
  timerId = setInterval(changeBackgroundColor, 1000);
  BtnDisabled(true);
});

refs.stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  BtnDisabled(false);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBackgroundColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
}

function BtnDisabled(bool) {
  refs.startBtn.disabled = bool;
  refs.stopBtn.disabled = !bool;
}
