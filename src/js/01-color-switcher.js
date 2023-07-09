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
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
});

refs.stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBackgroundColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
}
