const btnStartEl = document.querySelector('button[data-start]');
const btnStoptEl = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');

btnStoptEl.disabled = true;

btnStartEl.addEventListener('click', () => {
  chagngeBgrColor();

  btnStartEl.disabled = true;
  btnStoptEl.disabled = false;
});

btnStoptEl.addEventListener('click', () => {
  if (clearInterval) {
    clearInterval(colorInterval);

    btnStoptEl.disabled = true;
    btnStartEl.disabled = false;
  }
});

function chagngeBgrColor() {
  colorInterval = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
